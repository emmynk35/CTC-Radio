
import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { Song } from 'src/app/song'; 
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RadioAddSongComponent } from './radio-addSong.component';
import { MatDialog } from '@angular/material/dialog';
import { Track } from 'src/app/track';
import { MatTableDataSource } from '@angular/material/table';
import { SpotifyService } from 'src/app/spotify.services';
import { inject } from '@angular/core/testing';
//import { SpotifyService } from 'src/app/spotify.services';
const TOKEN: string ="BQChlvr0YendseeJ6Kxaf2Lr7bC4cQFImof4MYd35ZBswjZbCKuDUvkLqzHSQEUnI22158QDa7bbrxz9X8z4ndcQTI-4PqNJmhM9F0tNKxqSiNkXSGnGL6yiLzpf_0_mehgSsNxmoFSnmLIO4A";
const SONG_DATA: Song[] = [
    {
    title: "the sheep goes BAA",
    artist:"Jacob Rubin",
    albumName: "The Musical Alphabet",
    timeAdded: "",
    albumCoverURL: "https://humbernews.ca/wp-content/uploads/2020/01/Mac-Miller.jpg",
    trackID: "1",
    votes: 1,
    year:"2020",
    length: ""
    },
    {
        title: "the sheep goes BAA",
    artist:"Jacob Rubin",
    albumName: "The Musical Alphabet",
    timeAdded: "",
    albumCoverURL: "https://humbernews.ca/wp-content/uploads/2020/01/Mac-Miller.jpg",
    trackID: "1",
    votes: 1,
    year:"2020",
    length: ""
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
    }
    
    displayedColumnsSearch: string[]= ["actions", "Title", "Artist"];
        
    ngOnInit() {
      //set data for search table 
       this.service.searchSongTest('hey', "track", 20 , TOKEN).subscribe(tracks => {
            this.dataSourceSearch.data = tracks;
       });
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
        this.service.searchSongTest(this.song.value, "track", 20 , TOKEN).subscribe(tracks => {
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