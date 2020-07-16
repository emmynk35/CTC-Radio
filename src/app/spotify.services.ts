import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Track } from './track';
import { map } from 'rxjs/operators';

interface Token {
  accessToken: string
}

@Injectable()
export class SpotifyService {
  private url: string;
  private token: Token;
  private auth: string;
  private clientId: string = 'ad959a319ba14a81a4f1950d46f49aee';
  private clientSecret: string = '201ad462d8c64353bd52c5ad8ecb2bfe';
  private body: any;

  constructor(private _http: HttpClient) {}

  getAuthToken() {
    this._http.get<Token[]>('http://localhost:3000/auth/token').subscribe(data => {
      this.token = { accessToken: data['accessToken']};
      console.log(this.token.accessToken);
    });
  }
 
  // Get search results for song
  searchSongTest(keyword: string, type = 'track', limit: number, authToken: string) {
      let headers = new HttpHeaders({
        'Authorization': 'Bearer '+ authToken,
      });
      this.url = 'https://api.spotify.com/v1/search?q='+keyword+'&type='+type+'&market=US&limit='+limit;
      console.log(this.url);
      return this._http.get<Track[]>(this.url, {headers:headers});
  }

  searchSong(keyword: string, type = 'track', limit: number) {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+this.getAuthToken(),
    });
    this.url = 'https://api.spotify.com/v1/search?Q='+keyword+'&type='+type+'&market=US&limit='+limit;
    return this._http.get<Track[]>(this.url, {headers:headers});
  }

  // Get data about artist
  getArtist(artist_id: string) {
    let headers = new HttpHeaders({
        'Authorization': 'Bearer '+this.getAuthToken(),
    });

    this.url = 'https://api.spotify.com/v1/artists/' + artist_id;
    return this._http.get(this.url, { headers: headers });
  }

  // Get Tracks in ablum selected
  getAlbum(album_id: string) {
    let headers = new HttpHeaders({
        'Authorization': 'Bearer '+this.getAuthToken(),
    });

    this.url = 'https://api.spotify.com/v1/albums/' + album_id + '/tracks';

    return this._http.get(this.url, { headers: headers });
  }

  // get info of a track
  getTrack(track_id: string) {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+this.getAuthToken(),
    });
    this.url = 'https://api.spotify.com/v1/tracks/' + track_id;
    return this._http.get(this.url, {headers: headers});
  }

  //get info from all tracks in a playlist
  getPlaylist(playlist_id: string) {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+this.getAuthToken(),
    });
    this.url = 'https://api.spotify.com/v1/playlists/' + playlist_id + '/tracks';
    return this._http.get(this.url, {headers: headers}); 
  }

  // create playlist on emily's account (for now)
  createPlaylist(user_id: string, playlist_name:string) {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer'+this.getAuthToken(),
      'Content-Type': 'application/json'
    });
    let body = {
      'name': playlist_name,
      'description': 'Created by CTC Radio',
      'public': 'true'
    };
    this.url = 'https://api.spotify.com/v1/users/' + user_id + '/playlists';
    return this._http.post(this.url, body, {headers: headers});
  }

  // can add one or more tracks to specified playlist.
  addTracksToPlaylist(playlist_id: string, uris: string[]) {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+this.getAuthToken(),
      'Content-Type': 'application/json'
    });
    let body = {
      'uris': uris
    }
    this.url = 'https://api.spotify.com/v1/playlists/'+playlist_id+'/tracks';
    return this._http.post(this.url, body, {headers: headers});
  }

  //add track to queue on your spotify
  addTracktoQueue(uri:string){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+this.getAuthToken(),
    });
    this.url = 'https://api.spotify.com/v1/me/player/queue?uri='+uri;
    return this._http.post(this.url, {headers: headers});
  }

  //change queue order
  updateQueue() {
    
  }

  //change volume of currently playing song. volume goes from 0 - 100. mute is 0.
  changeVolume(volume: string) {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+this.getAuthToken(),
    });
    this.url = 'https://api.spotify.com/v1/me/player/volume?volume_percent='+volume;
    return this._http.put(this.url, {headers: headers});
  }

}