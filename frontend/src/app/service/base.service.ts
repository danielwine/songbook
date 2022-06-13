import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T extends { _id: number | string }> {
  apiBaseUrl = environment.apiBaseUrl;
  apiFullUrl = '';

  constructor(public http: HttpClient) {}

  // utility methods

  setUrlFor(entityName: string) {
    this.apiFullUrl = this.apiBaseUrl + entityName;
  }

  // CRUD methods

  createItem(item: T): Observable<T> {
    return this.http.post<T>(this.apiFullUrl, item);
  }

  getAll(): Observable<T[]> {
    console.log(this.apiFullUrl);

    return this.http.get<T[]>(this.apiFullUrl);
  }

  getItem(id: string): Observable<T> {
    return this.http.get<T>(this.apiFullUrl + '/' + id);
  }

  updateItem(item: T): Observable<T> {
    return this.http.patch<T>(this.apiFullUrl + '/' + item._id, item);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete<T>(this.apiFullUrl + '/' + id.toString());
  }
}
