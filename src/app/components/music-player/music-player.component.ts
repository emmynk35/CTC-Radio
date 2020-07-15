import { Component } from '@angular/core';
import { Song } from '../../song';

const SONG_DATA: Song = {
    title: "Nikes",
    artist: "Frank Ocean",
    albumName:"Blonde",
    trackID: "1",
    year: "2016",
    albumCoverURL: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg", 
    timeAdded: "",
    votes: 1,
    length: '5:14',
};

@Component({
   templateUrl: './music-player.component.html',
   styleUrls: ['./music-player.component.css'],
   selector: 'music-player',
})

export class MusicPlayerComponent {
    song = SONG_DATA;
    barValue = '50';
    songCurrLength = '0:00';
   
    getImageSrc() {
        return this.song.albumCoverURL;
    }
}