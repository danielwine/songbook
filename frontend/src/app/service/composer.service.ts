import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Composer } from '../model/composer';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ComposerService extends BaseService<Composer> {
  constructor(public override http: HttpClient) {
    super(http);
    this.setUrlFor('composer');
  }
}
