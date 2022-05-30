import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Song } from '../model/song';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class SongService extends BaseService<Song> {
  constructor(public override http: HttpClient) {
    super(http);
    this.setUrlFor('songs');
  }
}
