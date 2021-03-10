import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public idDialog:number = 78;

  constructor(
    private httpclient: HttpClient
  ) { }

  getPosts():Observable<any[]> {
    return this.httpclient.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getOnePost(id:number){
    return this.httpclient.get<any[]>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  getCommentsOfPost(id:number){
    return this.httpclient.get<any[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  }

  setIdDialog(id:number){
    this.idDialog = id;
  }

  sendIdDialog(){
    return this.idDialog;
  }

}
