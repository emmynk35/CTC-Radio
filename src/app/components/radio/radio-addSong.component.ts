import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
   templateUrl: './radio-addSong.component.html',
   styleUrls: ['./radio-addSong.component.css'],
   selector: 'radio-addSong',
})

export class RadioAddSongComponent implements OnInit{
   onSubmitCreate() {
      alert("Added to Queue!")
      //TODO: CREATE POST ENDPOINT TO ADD DATA.TRACK_ID TO QUEUE!
   }

   constructor(
    public dialogRef: MatDialogRef<RadioAddSongComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any){}

    ngOnInit(){
        console.log(this.data);
    }
}