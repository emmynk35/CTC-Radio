import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TrackTest } from './trackTest';
import { Track } from './track';


@Injectable()
export class SpotifyService {
  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;
  private clientId: string = 'ad959a319ba14a81a4f1950d46f49aee';
  private clientSecret: string = '201ad462d8c64353bd52c5ad8ecb2bfe';
  private songUrl: string;
  private playlistUrl: string;
  private body: any;


  constructor(private _http: HttpClient) { }


  // Get access token from Spotify to use API
  refreshAuth = () => {
    let headers = new HttpHeaders({
        'Authorization': 'Basic ' + btoa(this.clientId + ":" + this.clientSecret),
        'Content-Type': 'application/x-www-form-urlencoded' 
    });

    //let params: URLSearchParams = new URLSearchParams();
    //params.set('grant_type', 'client_credentials');
    //let body = params.toString();

    // let body = 
    // {
    //     grant_type: 'refresh_token'
    //     refresh_token: //database query to get the current refresh token
        
    // }

    //return this._http.post('https://accounts.spotify.com/api/token', body, {headers: headers});

  }

  // Get search results for song
  searchSong(keyword: string, type = 'track', limit: number, authToken: string) {
      let headers = new HttpHeaders({
        'Authorization': 'Bearer '+ authToken,
      });
      this.searchUrl = 'https://api.spotify.com/v1/search?q='+keyword+'&type='+type+'&market=US&limit='+limit;
      console.log(this.searchUrl);
      return this._http.get<Track[]>(this.searchUrl, {headers:headers});
  }

  // Get data about artist
  getArtist(artist_id: string, authToken: string) {
    let headers = new HttpHeaders({
        'Authorization': 'Bearer'+authToken,
    });

    this.artistUrl = 'https://api.spotify.com/v1/artists/' + artist_id;
    return this._http.get(this.artistUrl, { headers: headers });
  }

  // Get Tracks in ablum selected
  getAlbum(album_id: string, authToken: string) {
    let headers = new HttpHeaders({
        'Authorization': 'Bearer'+authToken,
    });

    this.albumUrl = 'https://api.spotify.com/v1/albums/' + album_id + '/tracks';

    return this._http.get(this.albumUrl, { headers: headers });
  }

  // get info of a track
  getTrack(track_id: string, authToken: string) {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer'+authToken,
    });
    this.songUrl = 'https://api.spotify.com/v1/tracks/' + track_id;
    return this._http.get(this.songUrl, {headers: headers});
  }

  //get info from all tracks in a playlist
  getPlaylist(playlist_id: string, authToken: string) {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer'+authToken,
    });
    this.playlistUrl = 'https://api.spotify.com/v1/playlists/' + playlist_id + '/tracks';
    return this._http.get(this.playlistUrl, {headers: headers}); 
  }

  // create playlist on emily's account (for now)
  createPlaylist(user_id: string, playlist_name:string, authToken: string) {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer'+authToken,
      'Content-Type': 'application/json'
    });
    let body = {
      'name': playlist_name,
      'description': 'Created by CTC Radio',
      'public': 'true'
    };
    this.playlistUrl = 'https://api.spotify.com/v1/users/' + user_id + '/playlists';
    return this._http.post(this.playlistUrl, body, {headers: headers});
  }

  // can add one or more tracks to specified playlist.
  addTracksToPlaylist(playlist_id: string, uris: string[], authToken: string) {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer'+authToken,
      'Content-Type': 'application/json'
    });
    let body = {
      'uris': uris
    }
    this.playlistUrl = 'https://api.spotify.com/v1/playlists/'+playlist_id+'/tracks';
    return this._http.post(this.playlistUrl, body, {headers: headers});
  }

}