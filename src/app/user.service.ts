import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:8080/api/user';

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  addUser(user: User): Observable<number> {
    return this.http.post<number>(this.usersUrl, user);
  }

  removeUser(user: User): Observable {
    return this.http.delete(this.usersUrl + '/' + user.id);
  }
}
