import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.models';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.scss']
})
export class TodoDialogComponent implements OnInit {
  public idDialog: number = 0;
  public todo!: Todo;
  public todos: Todo[];

  constructor(private _todoService: TodoService) { 
    this.idDialog = this._todoService.getIdDialog();
    console.log(this.idDialog);
    this.todos = this._todoService.getTodosArrayOffline();
    this.todo = this.todos[this.idDialog-1];
    console.log(this.todo.id);
    console.log(this.todos);

  }

  ngOnInit(): void {
  }

}
