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
    votes: 1,
    year: '2020',
    length: '3:00',
    },
    {
    title: "this ain't DECAF", 
    artist: "Jacob Rubin",
    albumName: "The Musical Alphabet",
    trackID: "2",
    albumCoverURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Farts.duke.edu%2Fnews%2Fmaking-music-matter%2F&psig=AOvVaw3iMhI5zMR4OirXZqEevwgm&ust=1594821774644000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiNv570zOoCFQAAAAAdAAAAABAD", 
    timeAdded: "",
    votes: 1,
    year: '2020',
    length: '3:00',
    },
     
]
@Component({
    templateUrl: './radio-addSong.component.html',
    styleUrls: ['./radio-addSong.component.css']
})

export class RadioAddSongComponent{
    displayedColumns: string[] = ["Title","Artist"];
    dataSource = SONG_DATA; 
}