import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/spotify.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ctc-radio';
  
  ngOnInit() {
    
  }
}


