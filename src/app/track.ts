import { Album } from './album';
import { Artist } from './Artist';
import { ExternalURL } from 'src/app/externalURL';
import { ExternalID } from './externalID';
import { LinkedTrack } from './linkedTrack';

export interface Track{
    album: Album;
    artists: Artist[];
    disc_number: number; 
    duration_ms: number;
    explicit: boolean;
  //  external_ids: ExternalID;
  //  external_urls: ExternalURL;
    href: string; 
    id: string; 
    is_playable: boolean;
    name: string; 
    popularity: number;
    preview_url: string; 
    track_number: number;
    type:string;
    uri:string;
    is_local:boolean;
}
