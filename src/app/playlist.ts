export class Playlist{
    playlistID: string; //unsure what type this should be, assuming this is how we'll access a song to spotify? might need to ba url 
    albumCoverURL: string; //url for album cover pic 

    constructor(aPlaylistID : string, anAlbumCoverURL : string){
        this.playlistID = aPlaylistID;
        this.albumCoverURL = anAlbumCoverURL;
    }
}