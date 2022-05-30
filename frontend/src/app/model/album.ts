export class Album {
  _id: number | string = 0;
  name: string = '';
  songs: number[] | string[] = [];
  year: number | string = 0;
  imageUrl?: string = '';
}
