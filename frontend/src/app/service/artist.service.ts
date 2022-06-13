import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artist } from '../model/artist';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ArtistService extends BaseService<Artist> {
  constructor(public override http: HttpClient) {
    super(http);
    this.setUrlFor('artist');
  }
}
