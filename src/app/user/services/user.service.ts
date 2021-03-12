import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.models';
import { Album } from 'src/app/album/models/album.models';
import { Todo } from 'src/app/todo/models/todo.models';

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

    getAlbumsOfOneUser(id:number) {
      return this.httpclient.get<Album[]>(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
    }

    getTodosOfOneUser(id:number) {
      return this.httpclient.get<Todo[]>(`https://jsonplaceholder.typicode.com/users/${id}/todos`);
    }

    setIdDialog(id:number){
    this.idDialog = id;
    }

    getIdDialog(){
      return this.idDialog;
    }

}
