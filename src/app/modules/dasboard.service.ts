import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from './model';

import {environment} from '../../environments/environment'

const countUsrUrl = environment.usersNumUrl;

@Injectable({
  providedIn: 'root'
})
export class DasboardService {

  constructor(private http:HttpClient) { }

  singUp(data:any):Observable<any>{
    return this.http.post(`http://127.0.0.1:3000/api/user/register`,data);
  }

  displayUsers():Observable<any> {
    return this.http.get(`http://127.0.0.1:3000/api/user`);
  }

  // display number of users
  card1():Observable<any>{
    return this.http.get(countUsrUrl);
  }

  currentUser(id:any):Observable<any>{
    return this.http.get(`http://127.0.0.1:3000/api/user/${id}`);
  }

  edittUser(id:any, data:any):Observable<any>{
    return this.http.put(`http://127.0.0.1:3000/api/user/${id}`, data);
  }

  deleteUser(id:any):Observable<any>{
    return this.http.delete(`http://127.0.0.1:3000/api/user/${id}`);
  }
}
