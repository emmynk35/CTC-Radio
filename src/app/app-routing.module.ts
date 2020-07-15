import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from '../app/components/about/about.component';
import { RadioComponent } from './components/radio/radio.component';
import { DailyPlaylistsComponent } from './components/daily-playlists/daily-playlists.component';
import { PlaylistPopupComponent } from './components/playlist-popup/playlist-popup.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'radio', component: RadioComponent},
  {path: 'daily-playlists', component: DailyPlaylistsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }