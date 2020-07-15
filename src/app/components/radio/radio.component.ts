import { Component } from '@angular/core';
import { Song } from 'src/app/song'; 
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RadioAddSongComponent } from './radio-addSong.component';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogActions }  from '@angular/material/dialog';
//import { SpotifyService } from 'src/app/spotify.services';

const SONG_DATA: Song[] = [
    {
    title: "the sheep goes BAA",
    artist: "Jacob Rubin",
    albumName:"The Musical Alphabet",
    trackID: "1",
    albumCoverURL: "https://humbernews.ca/wp-content/uploads/2020/01/Mac-Miller.jpg", 
    timeAdded: "",
    votes: 1, 
    year: "2020",
    length: "2"
    },
    {
    title: "this ain't DECAF", 
    artist: "Jacob Rubin",
    albumName: "The Musical Alphabet",
    trackID: "2",
    albumCoverURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Farts.duke.edu%2Fnews%2Fmaking-music-matter%2F&psig=AOvVaw3iMhI5zMR4OirXZqEevwgm&ust=1594821774644000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiNv570zOoCFQAAAAAdAAAAABAD", 
    timeAdded: "",
    votes: 1, 
    year: "2020",
    length: "2"
    },
    {
        title: "the sheep goes BAA",
        artist: "Jacob Rubin",
        albumName:"The Musical Alphabet",
        trackID: "1",
        albumCoverURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Farts.duke.edu%2Fnews%2Fmaking-music-matter%2F&psig=AOvVaw3iMhI5zMR4OirXZqEevwgm&ust=1594821774644000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiNv570zOoCFQAAAAAdAAAAABAD", 
        timeAdded: "",
        votes: 1, 
        year: "2020",
        length: "2"
    },
    {
        title: "the sheep goes BAA",
        artist: "Jacob Rubin",
        albumName:"The Musical Alphabet",
        trackID: "1",
        albumCoverURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Farts.duke.edu%2Fnews%2Fmaking-music-matter%2F&psig=AOvVaw3iMhI5zMR4OirXZqEevwgm&ust=1594821774644000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiNv570zOoCFQAAAAAdAAAAABAD", 
        timeAdded: "",
        votes: 1, 
        year: "2020",
        length: "2"
    },
    {
        title: "the sheep goes BAA",
        artist: "Jacob Rubin",
        albumName:"The Musical Alphabet",
        trackID: "1",
        albumCoverURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Farts.duke.edu%2Fnews%2Fmaking-music-matter%2F&psig=AOvVaw3iMhI5zMR4OirXZqEevwgm&ust=1594821774644000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiNv570zOoCFQAAAAAdAAAAABAD", 
        timeAdded: "",
        votes: 1, 
        year: "2020",
        length: "2"
    },
    {
        title: "the sheep goes BAA",
        artist: "Jacob Rubin",
        albumName:"The Musical Alphabet",
        trackID: "1",
        albumCoverURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Farts.duke.edu%2Fnews%2Fmaking-music-matter%2F&psig=AOvVaw3iMhI5zMR4OirXZqEevwgm&ust=1594821774644000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiNv570zOoCFQAAAAAdAAAAABAD", 
        timeAdded: "",
        votes: 1, 
        year: "2020",
        length: "2"
    }, 
    {
        title: "the sheep goes BAA",
        artist: "Jacob Rubin",
        albumName:"The Musical Alphabet",
        trackID: "1",
        albumCoverURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Farts.duke.edu%2Fnews%2Fmaking-music-matter%2F&psig=AOvVaw3iMhI5zMR4OirXZqEevwgm&ust=1594821774644000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiNv570zOoCFQAAAAAdAAAAABAD", 
        timeAdded: "",
        votes: 1, 
        year: "2020",
        length: "2"
    },
    {
        title: "the sheep goes BAA",
        artist: "Jacob Rubin",
        albumName:"The Musical Alphabet",
        trackID: "1",
        albumCoverURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Farts.duke.edu%2Fnews%2Fmaking-music-matter%2F&psig=AOvVaw3iMhI5zMR4OirXZqEevwgm&ust=1594821774644000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiNv570zOoCFQAAAAAdAAAAABAD", 
        timeAdded: "",
        votes: 1, 
        year: "2020",
        length: "2"
    },
    {
        title: "the sheep goes BAA",
        artist: "Jacob Rubin",
        albumName:"The Musical Alphabet",
        trackID: "1",
        albumCoverURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Farts.duke.edu%2Fnews%2Fmaking-music-matter%2F&psig=AOvVaw3iMhI5zMR4OirXZqEevwgm&ust=1594821774644000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiNv570zOoCFQAAAAAdAAAAABAD", 
        timeAdded: "",
        votes: 1, 
        year: "2020",
        length: "2"
    },       
     
]

@Component({
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.css'],
    selector: 'radio'
})

export class RadioComponent{
    /* NOTES:
        - dataSource goes to the queue, it needs to SUBSCRIBE to the queue we have on the backend-->
        constant get endpoint that is updated constanly
        - dataSourceSearch is the data for the search results, gets updated upon hitting "search" button
        - create POST endpoint: when you click the "plus" button    
        - need to pay
    */ 
    displayedColumns: string[]= [ "albumCoverURL", "Title", "Artist", "Album", "votes"];
    dataSource = SONG_DATA;
    isHidden = true; 
    searchedSongs: Song[];
    
    song = new FormControl('');    

    //add spotify service
    constructor(private router:Router, public dialog: MatDialog){}
    
    displayedColumnsSearch: string[]= ["actions", "Title", "Artist"];
    dataSourceSearch = SONG_DATA;


    search(): void {
        console.log(this.song.value);
        this.isHidden = !this.isHidden; 
        console.log("isHidden: ", this.isHidden);
        //this is to get the searched data 
       // this.searchedSongs = this.service.searchSong(this.song.value, "song", "token");

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