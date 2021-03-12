import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpclient: HttpClient) { }

  getTodos() {
    return this.httpclient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
