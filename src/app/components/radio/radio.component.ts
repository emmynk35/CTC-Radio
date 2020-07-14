import { Component } from '@angular/core';
import { Song } from 'src/app/song'; 
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
//import { SpotifyService } from 'src/app/spotify.services';

const SONG_DATA: Song[] = [
    {
    title: "the sheep goes BAA",
    artist: "Jacob Rubin",
    albumName:"The Musical Alphabet",
    trackID: "1",
    albumCoverURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Farts.duke.edu%2Fnews%2Fmaking-music-matter%2F&psig=AOvVaw3iMhI5zMR4OirXZqEevwgm&ust=1594821774644000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiNv570zOoCFQAAAAAdAAAAABAD", 
    timeAdded: "",
    votes: 1
    },
    {
    title: "this ain't DECAF", 
    artist: "Jacob Rubin",
    albumName: "The Musical Alphabet",
    trackID: "2",
    albumCoverURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Farts.duke.edu%2Fnews%2Fmaking-music-matter%2F&psig=AOvVaw3iMhI5zMR4OirXZqEevwgm&ust=1594821774644000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiNv570zOoCFQAAAAAdAAAAABAD", 
    timeAdded: "",
    votes: 1
    },
    {
        title: "the sheep goes BAA",
        artist: "Jacob Rubin",
        albumName:"The Musical Alphabet",
        trackID: "1",
        albumCoverURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Farts.duke.edu%2Fnews%2Fmaking-music-matter%2F&psig=AOvVaw3iMhI5zMR4OirXZqEevwgm&ust=1594821774644000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiNv570zOoCFQAAAAAdAAAAABAD", 
        timeAdded: "",
        votes: 1
    },
    {
        title: "the sheep goes BAA",
        artist: "Jacob Rubin",
        albumName:"The Musical Alphabet",
        trackID: "1",
        albumCoverURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Farts.duke.edu%2Fnews%2Fmaking-music-matter%2F&psig=AOvVaw3iMhI5zMR4OirXZqEevwgm&ust=1594821774644000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiNv570zOoCFQAAAAAdAAAAABAD", 
        timeAdded: "",
        votes: 1
    },
    {
        title: "the sheep goes BAA",
        artist: "Jacob Rubin",
        albumName:"The Musical Alphabet",
        trackID: "1",
        albumCoverURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Farts.duke.edu%2Fnews%2Fmaking-music-matter%2F&psig=AOvVaw3iMhI5zMR4OirXZqEevwgm&ust=1594821774644000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiNv570zOoCFQAAAAAdAAAAABAD", 
        timeAdded: "",
        votes: 1
    },
    {
        title: "the sheep goes BAA",
        artist: "Jacob Rubin",
        albumName:"The Musical Alphabet",
        trackID: "1",
        albumCoverURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Farts.duke.edu%2Fnews%2Fmaking-music-matter%2F&psig=AOvVaw3iMhI5zMR4OirXZqEevwgm&ust=1594821774644000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiNv570zOoCFQAAAAAdAAAAABAD", 
        timeAdded: "",
        votes: 1
    }, 
    {
        title: "the sheep goes BAA",
        artist: "Jacob Rubin",
        albumName:"The Musical Alphabet",
        trackID: "1",
        albumCoverURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Farts.duke.edu%2Fnews%2Fmaking-music-matter%2F&psig=AOvVaw3iMhI5zMR4OirXZqEevwgm&ust=1594821774644000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiNv570zOoCFQAAAAAdAAAAABAD", 
        timeAdded: "",
        votes: 1
    },
    {
        title: "the sheep goes BAA",
        artist: "Jacob Rubin",
        albumName:"The Musical Alphabet",
        trackID: "1",
        albumCoverURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Farts.duke.edu%2Fnews%2Fmaking-music-matter%2F&psig=AOvVaw3iMhI5zMR4OirXZqEevwgm&ust=1594821774644000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiNv570zOoCFQAAAAAdAAAAABAD", 
        timeAdded: "",
        votes: 1
    },
    {
        title: "the sheep goes BAA",
        artist: "Jacob Rubin",
        albumName:"The Musical Alphabet",
        trackID: "1",
        albumCoverURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Farts.duke.edu%2Fnews%2Fmaking-music-matter%2F&psig=AOvVaw3iMhI5zMR4OirXZqEevwgm&ust=1594821774644000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiNv570zOoCFQAAAAAdAAAAABAD", 
        timeAdded: "",
        votes: 1
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
    isHidden = false; 
    searchedSongs: Song[];
    
    song = new FormControl('');    

    //add spotify servic e
    constructor(private router:Router){}
    
    displayedColumnsSearch: string[]= ["actions", "Title", "Artist"];
    dataSourceSearch = SONG_DATA;


    search(): void {
        console.log(this.song.value);
        this.isHidden = !this.isHidden; 
        console.log("isHidden: ", this.isHidden);
        //this is to get the searched data 
       // this.searchedSongs = this.service.searchSong(this.song.value, "song", "token");

    }

    
}   