import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public idDialog: number = 0;
  public todos: Todo[] = [];
  constructor(private httpclient: HttpClient) { }

  getTodos() {
    return this.httpclient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getTodo(id:number) {
    return this.httpclient.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  setIdDialog(id:number){
    this.idDialog = id;
  }

  getIdDialog(){
    return this.idDialog;
  }

  setTodosArrayOffline(todos:Todo[]){
    this.todos = todos;
  }

  getTodosArrayOffline(){
    return this.todos;
  }
}
