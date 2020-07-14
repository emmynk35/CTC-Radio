import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Song } from '../../song';

const PLAYLIST_DATA: Song[] = [
   {
      title: "Hand Me Downs",
      artist: "Mac Miller",
      albumName: "Circles",
      trackID: "1",
      albumCoverURL: "https://humbernews.ca/wp-content/uploads/2020/01/Mac-Miller.jpg",
      timeAdded: "",
      votes: 1,
   },
   {
      title: "Hand Me Downs",
      artist: "Mac Miller",
      albumName: "Circles",
      trackID: "1",
      albumCoverURL: "https://humbernews.ca/wp-content/uploads/2020/01/Mac-Miller.jpg",
      timeAdded: "",
      votes: 1,
   },
]

@Component({
   templateUrl: './playlist-popup.component.html',
   styleUrls: ['./playlist-popup.component.css'],
   selector: 'playlist-popup',
})

export class PlaylistPopupComponent {
   displayedColumns: string[] = ["albumCoverURL", "Title", "Artist", "Album"];
   dataSource = PLAYLIST_DATA;
   playlistID: string;

   constructor(
      public dialogRef: MatDialogRef<PlaylistPopupComponent>,
      @Inject(MAT_DIALOG_DATA) public data:any){}

   onNoClick(): void {
      this.dialogRef.close();
   }
}