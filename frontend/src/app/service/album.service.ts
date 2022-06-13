import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../model/album';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class AlbumService extends BaseService<Album> {
  constructor(public override http: HttpClient) {
    super(http);
    this.setUrlFor('album');
  }
}
