import { Component } from '@angular/core';


@Component({
   templateUrl: './daily-playlists.component.html',
   styleUrls: ['./daily-playlists.component.css'],
   selector: 'daily-playlists',
})

export class DailyPlaylistsComponent {
    public play(message : string){
        //right now just takes in title of the album and sends an alert with the title
        alert(message);
        //once we can conncet to spotify, we can use this to direct to the actual playing of playlists
    }
}