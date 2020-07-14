import { Component } from '@angular/core';
import { Song } from 'src/app/song'; 

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
     
]



@Component({
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.css'],
    selector: 'radio'
})

export class RadioComponent{
    displayedColumns: string[ ]= [ "albumCoverURL", "Title", "Artist", "Album", "votes"];
    dataSource = SONG_DATA;
}