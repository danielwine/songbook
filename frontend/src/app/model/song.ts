import { Album } from './album';
import { Artist } from './artist';
import { Composer } from './composer';
import { Genre } from './genre';
import { Lyricist } from './lyricist';

export class Song {
  _id: string = '';
  title: string = '';
  artist = new Artist();
  album? = new Album();
  year?: number | string = 1970;
  time?: string = '';
  lyricist? = [new Lyricist()];
  composer? = [new Composer()];
  x_genre? = [new Genre()];
  lyrics: string = '';
}

export class SongRequest {
  [key: string]: any;
  _id: string = '';
  title: string = '';
  artist = '';
  album? = '';
  year?: number | string = 1970;
  time?: string = '';
  lyricist: string[] = []
  composer: string[] = []
  x_genre: string[] = []
  lyrics = '';
}
