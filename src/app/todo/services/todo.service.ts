import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todoDialog!: Todo;
  public todos: Todo[] = [];
  constructor(private httpclient: HttpClient) { }

  getTodos() {
    return this.httpclient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getTodo(id:number) {
    return this.httpclient.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  setTodoDialog(todo:Todo){
    this.todoDialog = todo;
  }

  getTodoDialog(){
    return this.todoDialog;
  }

  setTodosArrayOffline(todos:Todo[]){
    this.todos = todos;
  }

  getTodosArrayOffline(){
    return this.todos;
  }

  getTodoArrayOffline(id: number){
    return this.todos[id-1];
  }
}
