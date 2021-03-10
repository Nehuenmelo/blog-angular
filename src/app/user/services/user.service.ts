import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpclient: HttpClient) { }

   getUsers():Observable<any[]> {
     return this.httpclient.get<any[]>('https://jsonplaceholder.typicode.com/users');
   }
}
