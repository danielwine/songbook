class Item {
  _id: string = '';
  name: string = '';
}

export class Song {
  _id: number | string = 0;
  title: string = '';
  artist = new Item();
  album = new Item();
  year: number | string = 0;
  time: string = '';
  lyricist = [new Item()];
  composer = [new Item()];
  x_genre = [new Item()];
  lyrics: string = '';
}
