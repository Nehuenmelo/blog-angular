import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.models';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public idDialog:number = 0;

  constructor(
    private httpclient: HttpClient
  ) { }

  getPosts() {
    return this.httpclient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getOnePost(id:number){
    return this.httpclient.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  getCommentsOfPost(id:number){
    return this.httpclient.get<any[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  }

  setIdDialog(id:number){
    this.idDialog = id;
  }

  getIdDialog(){
    return this.idDialog;
  }

}
