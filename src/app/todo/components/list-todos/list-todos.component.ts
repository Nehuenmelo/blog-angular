import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { User } from 'src/app/user/models/user.models';
import { UserService } from 'src/app/user/services/user.service';
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
  public idUser: number = 0;
  public existUserId: boolean = false;
  public response:any;
  public user!: User;
  public todos: Todo[] = [];
  public optionSelected: string = '';
  public selectedOptions: Todo[] = [];
  filters: Filter[] = [
    {value: 'vof', viewValue: 'Completadas'},
    {value: 'userId', viewValue: 'ID de Usuario'}
  ];

  constructor(
    private _todoService: TodoService,
    public dialog: MatDialog,
    private _userService: UserService,
    private route: ActivatedRoute,
  ) {
    this.response = this.route.snapshot.paramMap.get('id');
    console.log(this.response);
    this.idUser = this.response;
  }

  ngOnInit(): void {
    this.listAllOrUserTodos();
  }

  listAllOrUserTodos(){
    if(this.idUser === null){
      this.existUserId = false;
      this._todoService.getTodos().subscribe((data:Todo[]) => {
        this._todoService.setTodosArrayOffline(data);
        this.todos = this._todoService.getTodosArrayOffline();
        this.selectedOptions = this.todos.filter(item=>item.completed);
      });
    } else {
      this.existUserId = true;
      this._userService.getTodosOfOneUser(this.idUser).subscribe( (data) => {
        this._todoService.setTodosArrayOffline(data);
        this.todos = this._todoService.getTodosArrayOffline();
        this.selectedOptions = this.todos.filter(item=>item.completed);
      });
      this._userService.getUser(this.idUser).subscribe( (data) => {
        this.user = data;
      });
    }
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
