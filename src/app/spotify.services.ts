import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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
  searchSong(keyword: string, type = 'track', authToken: string) {
      let headers = new HttpHeaders({
        'Authorization': 'Bearer'+authToken,
      });
      this.searchUrl = 'https://api.spotify.com/v1/search?Q=' + keyword + '&type=' + type + '&market=US';
      return this._http.get(this.searchUrl, {headers:headers});
  }

  // Get data about artist that has been chosen to view
  getArtist(id: string, authToken: string) {
    let headers = new HttpHeaders({
        'Authorization': 'Bearer'+authToken,
    });

    this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
    return this._http.get(this.artistUrl, { headers: headers });
  }

  // Get the albums about the artist that has been chosen
  getAlbums(id: string, authToken: string) {
    let headers = new HttpHeaders({
        'Authorization': 'Bearer'+authToken,
    });

    this.albumsUrl = 'https://api.spotify.com/v1/artists/' + id + '/albums?market=US&album_type=single';

    return this._http.get(this.albumsUrl, { headers: headers });
  }

  // Get Tracks in ablum selected
  getAlbum(id: string, authToken: string) {
    let headers = new HttpHeaders({
        'Authorization': 'Bearer'+authToken,
    });

    this.albumUrl = 'https://api.spotify.com/v1/albums/' + id;

    return this._http.get(this.albumUrl, { headers: headers });
  }

  getTrack(id: string, authToken: string) {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer'+authToken,
    });
    this.songUrl = 'https://api.spotify.com/v1/tracks/' + id;
    return this._http.get(this.songUrl, {headers: headers});
  }

  getPlaylist(id: string, authToken: string) {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer'+authToken,
    });
    this.playlistUrl = 'https://api.spotify.com/v1/playlists/' + id;
    return this._http.get(this.playlistUrl, {headers: headers}); 
  }

  //createPlaylist()
}