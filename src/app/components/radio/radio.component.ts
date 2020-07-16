
import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { Song } from 'src/app/song'; 
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RadioAddSongComponent } from './radio-addSong.component';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogActions }  from '@angular/material/dialog';
import { Track } from 'src/app/track';
import { TrackTest} from 'src/app/trackTest';
import { MatTableDataSource } from '@angular/material/table';
import { SpotifyService } from 'src/app/spotify.services';
import { TrackDummy } from 'src/app/trackDummy';
import { inject } from '@angular/core/testing';
//import { SpotifyService } from 'src/app/spotify.services';
const TOKEN: string ="BQAwe8h0J3_840xZ8WgToc78GurxPL4xCVm3hteGZmZMlE5_DZF-nqaBlVzqhrwPI4uUfqVqHpOiZ8GNOcH_qtVdYgQinEOc-cuV3gQClDazCca-F5TX3nHNEB__YgEL10iTHy89SA64KnXgIQ";
const SONG_DATA: TrackDummy[] = [
    {
    name: "the sheep goes BAA",
    artists: [{name:"Jacob Rubin", id: "", uri:"", type: "artist"}],
    album: {name:"The Musical Alphabet", id: "", images:[{width: 300,height: 300, url: "https://humbernews.ca/wp-content/uploads/2020/01/Mac-Miller.jpg"}]},
    id: "1",
    },
    {
        name: "the sheep goes BAA",
        artists: [{name:"Jacob Rubin", id: "", uri:"", type: "artist"}],
        album: {name:"The Musical Alphabet", id: "", images:[{width: 300,height: 300, url: "https://humbernews.ca/wp-content/uploads/2020/01/Mac-Miller.jpg"}]},
        id: "1",
        },
    {
        name: "the sheep goes BAA",
        artists: [{name:"Jacob Rubin", id: "", uri:"", type: "artist"}],
        album: {name:"The Musical Alphabet", id: "", images:[{width: 300,height: 300, url: "https://humbernews.ca/wp-content/uploads/2020/01/Mac-Miller.jpg"}]},    
        id: "1",
     }, 
]

@Component({
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.css'],
    selector: 'radio'
})

export class RadioComponent implements OnInit{
    /* NOTES:
        - dataSource goes to the queue, it needs to SUBSCRIBE to the queue we have on the backend-->
        constant get endpoint that is updated constanly
        - dataSourceSearch is the data for the search results, gets updated upon hitting "search" button
        - create POST endpoint: when you click the "plus" button    
        - need to pay
    */ 
    displayedColumns: string[]= [ "albumCoverURL", "Title", "Artist", "Album"];
    dataSource= SONG_DATA;
    isHidden = true; 
    searchedSongs: Track[];
    dataSourceSearch: MatTableDataSource<Track> = new MatTableDataSource<Track>([]);
    song = new FormControl('');    

    //add spotify service
    constructor(private router:Router, public dialog: MatDialog, public service:SpotifyService, private renderer: Renderer2){
        console.log(SONG_DATA[0].album.name);
    }
    
    displayedColumnsSearch: string[]= ["actions", "Title", "Artist"];
        
    ngOnInit() {
      //set data for search table 
       this.service.searchSong('hey', "track", 20 , TOKEN).subscribe(tracks => {
            this.dataSourceSearch.data = tracks;
        //install spotify webplayer SDK
        const s = this.renderer.createElement('script');
        s.onload = this.loadSDKScript.bind(this);
        s.type = 'text/javascript';
        s.src = 'https://sdk.scdn.co/spotify-player.js';
        s.text = '';
        this.renderer.appendChild(document.body, s);
    }

    loadSDKScript() {
        const s = this.renderer.createElement('script');
        s.text = `
            window.onSpotifyWebPlaybackSDKReady = () => {
                const token = '[My Spotify Web API access token]';
                const player = new Spotify.Player({
                name: 'Web Playback SDK Quick Start Player',
                getOAuthToken: cb => { cb(token); }
                });
        
                // Error handling
                player.addListener('initialization_error', ({ message }) => { console.error(message); });
                player.addListener('authentication_error', ({ message }) => { console.error(message); });
                player.addListener('account_error', ({ message }) => { console.error(message); });
                player.addListener('playback_error', ({ message }) => { console.error(message); });
        
                // Playback status updates
                player.addListener('player_state_changed', state => { console.log(state); });
        
                // Ready
                player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
                });
        
                // Not Ready
                player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
                });
        
                // Connect to the player!
                player.connect();
            };
        `;
        this.renderer.appendChild(document.body, s);
    }

    search(): void {
        console.log(this.song.value);
        this.isHidden = !this.isHidden; 
        console.log("isHidden: ", this.isHidden);
        this.service.searchSong(this.song.value, "track", 20 , TOKEN).subscribe(tracks => {
            this.dataSourceSearch.data = tracks.tracks.items;
            console.log("Data: ", this.dataSourceSearch.data);

            console.log("SongL", this.dataSourceSearch.data);
        });

        //this is to get the searched data 
        //this.dataSourceSearch.filteredData = this.service.searchSong(this.song.value, "track", 20, TOKEN);
    }
    openPopup(trackID:string, title:string, artist:string): void{

        console.log("Adding song to queue:", title);
        this.dialog.open(RadioAddSongComponent, {
            width: '600px',
            data: {
                trackID: trackID,
                title: title,
                artist: artist
            } 
        });
 

    }
    
    
}   