import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genre } from '../model/genre';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class GenreService extends BaseService<Genre> {
  constructor(public override http: HttpClient) {
    super(http);
    this.setUrlFor('genre');
  }
}
