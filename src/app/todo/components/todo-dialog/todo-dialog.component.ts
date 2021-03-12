import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.models';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.scss']
})
export class TodoDialogComponent implements OnInit {
  public idDialog!: Todo;
  public todo!: Todo;

  constructor(private _todoService: TodoService) { 
    this.idDialog = this._todoService.getTodoDialog();
    let info = this._todoService.getTodosArrayOffline();
    console.log(this.idDialog);
    this.todo = info[this.idDialog.id-1];
  }

  ngOnInit(): void {
  }

}
