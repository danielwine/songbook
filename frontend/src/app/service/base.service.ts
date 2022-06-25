import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T extends {_id?: string}> {
  apiBaseUrl = environment.apiBaseUrl;
  apiFullUrl = '';

  constructor(public http: HttpClient) {}

  // utility methods

  setUrlFor(entityName: string) {
    this.apiFullUrl = this.apiBaseUrl + entityName;
  }

  // CRUD methods

  createItem(item: T): Observable<T> {
    console.log('create ', this.apiFullUrl, item);

    return this.http.post<T>(this.apiFullUrl, item);
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiFullUrl);
  }

  getAllIds(): Observable<T[]> {
    return this.http.get<T[]>(this.apiFullUrl + '/ids');
  }

  getItem(id: string): Observable<T> {
    return this.http.get<T>(this.apiFullUrl + '/' + id);
  }

  updateItem(item: T): Observable<T> {
    return this.http.put<T>(this.apiFullUrl + '/' + item._id, item);
  }

  deleteItem(id: string): Observable<any> {
    return this.http.delete<T>(this.apiFullUrl + '/' + id);
  }
}
