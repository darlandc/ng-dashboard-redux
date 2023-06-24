import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API = 'http://localhost:3000'

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<any> {
    return this._http.get(`${this.API}/users`);
  }
}
