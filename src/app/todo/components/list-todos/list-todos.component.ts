import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Todo } from '../../models/todo.models';
import { TodoService } from '../../services/todo.service';
import { TodoDialogComponent } from '../todo-dialog/todo-dialog.component';

interface Filter {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {
  public todos: Todo[] = [];
  public optionSelected: string = '';
  public selectedOptions: Todo[] = [];
  filters: Filter[] = [
    {value: 'vof', viewValue: 'Completadas'},
    {value: 'userId', viewValue: 'ID de Usuario'}
  ];

  constructor(
    private _todoService: TodoService,
    public dialog: MatDialog
  ) {
    this._todoService.getTodos().subscribe((data:Todo[]) => {
      this._todoService.setTodosArrayOffline(data);
      this.todos = this._todoService.getTodosArrayOffline();
      this.selectedOptions = this.todos.filter(item=>item.completed);
    });
  }

  ngOnInit(): void {
  }

  changeFilter(){
    this.todos = this._todoService.getTodosArrayOffline();
    if(this.optionSelected == 'vof'){
      this.selectedOptions = this.todos.filter(item=>item.completed);
      this.todos = this.todos.sort(function(x, y) {
        let a:number;
        let b:number;
        x.completed == true ? a = 1 : a = 0;
        y.completed == true ? b = 1 : b = 0;
        return b-a;
      });
      /* for(let i = 0; i <= this.todos.length; i++){
        this.todos[i].id = i;
      } */
      console.log(this.todos);
      return this._todoService.setTodosArrayOffline(this.todos);
    }
    this.todos = this.todos.sort((a, b) => a.userId-b.userId);
    /* for(let i = 0; i <= this.todos.length; i++){
      this.todos[i].id = i;
    } */
    console.log(this.todos);
    return this._todoService.setTodosArrayOffline(this.todos);
  }

  openDialog(event:MouseEvent, id:number) {
    event.stopPropagation();
    this._todoService.setIdDialog(id);
    const dialogRef = this.dialog.open(TodoDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  setTodoBooleanOffline(todo:Todo){
    todo.completed == true ? this.todos[todo.id-1].completed = false : this.todos[todo.id-1].completed = true;
    this._todoService.setTodosArrayOffline(this.todos);
    console.log('change', this.todos[todo.id-1].completed);
  }

}
