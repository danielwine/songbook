import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lyricist } from '../model/lyricist';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class LyricistService extends BaseService<Lyricist> {
  constructor(public override http: HttpClient) {
    super(http);
    this.setUrlFor('lyricists');
  }
}
