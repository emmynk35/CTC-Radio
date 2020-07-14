import { Component } from '@angular/core';
import { Playlist } from 'src/app/playlist'; 
import { PlaylistPopupComponent } from '../playlist-popup/playlist-popup.component';
import { MatDialog } from '@angular/material/dialog';
const PLAYLIST_DATA: Playlist[] = [
    {
        playlistID: "1",
        albumCoverURL: "https://static.billboard.com/files/media/maggie-rogers-heard-it-in-a-past-life-album-art-2019-billboard-1240-1024x1024.jpg", 
        date: "July 14th, 2020"
    },
    {
        playlistID: "2",
        albumCoverURL: "https://static.billboard.com/files/media/Anderson-.Paak-Ventura-album-art-2019-billboard-1240-1024x1024.jpg", 
        date: "July 13th, 2020"
    },
    {
        playlistID: "3",
        albumCoverURL:"https://static.billboard.com/files/media/Billie-Eilish-When-We-All-Fall-Asleep-Where-Do-We-Go_-album-art-2019-billboard-1240-1024x1024.jpg",
        date: "July 12th, 2020" 
    },
    {
        playlistID: "4",
        albumCoverURL: "https://static.billboard.com/files/media/Chance-the-Rapper-The-Big-Day-album-art-2019-billboard-1240-1024x1024.jpg", 
        date: "July 11th, 2020"
    },
    {
        playlistID: "5",
        albumCoverURL:"https://static.billboard.com/files/media/cub-sport-cub-sport-album-art-2019-billboard-1240--1024x1024.jpg",
        date: "July 10th, 2020" 
    },
    {
        playlistID: "6",
        albumCoverURL: "https://static.billboard.com/files/media/Nina-Nesbitt-The-Sun-Will-Come-Up-the-Seasons-Will-Change-album-art-2019-billboard-1240-1024x1024.jpg",
        date: "July 9th, 2020" 
    },
    {
        playlistID: "7",
        albumCoverURL: "https://static.billboard.com/files/media/Missy-Elliott-Iconology-album-art-2019-billboard-1240-1024x1024.jpg",
        date: "July 8th, 2020" 
    },
    {
        playlistID: "8",
        albumCoverURL: "https://static.billboard.com/files/media/Jade-Bird-Jade-Bird-album-art-2019-billboard-1240-1024x1024.jpg", 
        date: "July 7th, 2020"
    },
    {
        playlistID: "9",
        albumCoverURL: "https://static.billboard.com/files/media/DaBaby-Kirk-album-art-2019-billboard-1240-1024x1024.jpg", 
        date: "July 6th, 2020"
    },
    {
        playlistID: "10",
        albumCoverURL: "https://static.billboard.com/files/media/Young-Thug-Jeffery-2016-billboard-1240-1024x1024.jpg",
        date: "July 5th, 2020"
    },
]




@Component({
   templateUrl: './daily-playlists.component.html',
   styleUrls: ['./daily-playlists.component.css'],
   selector: 'daily-playlists',
})



export class DailyPlaylistsComponent {
    dataSource = PLAYLIST_DATA;
    public play(message : string){
        //right now just takes in title of the album and sends an alert with the title
        alert(message);
        //once we can conncet to spotify, we can use this to direct to the actual playing of playlists
    }

    constructor(public dialog: MatDialog) {}

    openPopup(): void {
       this.dialog.open(PlaylistPopupComponent, {
           width: '600px',
       });

    }
    //adds new playlist to the beginning of the array
    addPlaylistToDataSource(playlistId : string, albumCoverURL : string, date : string) : void {
            const data = new Playlist(playlistId, albumCoverURL, date);
            this.dataSource.unshift(data);
    }
}