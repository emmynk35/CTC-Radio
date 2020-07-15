import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/spotify.services';
import { LoginComponent } from 'src/app/components/login/login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ctc-radio';
 
  
  ngOnInit() {
    
  }
  constructor(public dialog: MatDialog) {}
  openLogin(): void {
    this.dialog.open(LoginComponent, {
        width: '600px',
        panelClass: 'my-dialog',
    });
  }
}


