import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from '../app/components/about/about.component';
import { DailyPlaylistsComponent } from '../app/components/daily-playlists/daily-playlists.component';
const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'daily-playlists', component: DailyPlaylistsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
