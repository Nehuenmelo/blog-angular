import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[] = [];

  constructor(private httpclient: HttpClient) {
    console.log('funcionando');
   }

   getUsers():Observable<User[]> {
     return this.httpclient.get<User[]>('https://jsonplaceholder.typicode.com/users')
   }
}
