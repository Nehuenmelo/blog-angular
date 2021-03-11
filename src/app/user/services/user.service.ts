import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public idDialog:number = 0;

  constructor(private httpclient: HttpClient) { }

    getUsers():Observable<any[]> {
      return this.httpclient.get<any[]>('https://jsonplaceholder.typicode.com/users');
    }

    getUser(id:number) {
    return this.httpclient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
    }

    getPostsOfOneUser(id:number):Observable<any[]> {
    return this.httpclient.get<any[]>(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
    }

    setIdDialog(id:number){
    this.idDialog = id;
    }

    getIdDialog(){
      return this.idDialog;
    }

}
