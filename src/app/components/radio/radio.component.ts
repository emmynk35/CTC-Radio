import { Component } from '@angular/core';
import { Song } from '';

const SONG_DATA: Song[] = [
    {
    title: "the sheep goes BAA",
    artist: "Jacob Rubin",
    albumName:"The Musical Alphabet",
}
]

@Component({
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.css']  
})

export class RadioComponent{
    
}; 
