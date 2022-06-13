import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  entity = 'user';
  apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  get(id?: string | number): Observable<User | User[]> {
    let url = `${this.apiBaseUrl}${this.entity}`;
    if (id) {
      url += `/${id}`;
    }
    return this.http.get<User[]>(url);
  }

  query(queryString: string): Observable<User | User[]> {
    const url = `${this.apiBaseUrl}${this.entity}?${queryString}`;
    return this.http.get<User[]>(url);
  }

  update(user: User): Observable<User> {
    const url = `${this.apiBaseUrl}${this.entity}/${user.id}`;
    return this.http.put<User>(url, user);
  }
}
