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
  public showIdInputFilter: boolean = false;
  public idInputFilterValue: string = '';
  public arrayFiltered: Todo[] = [];
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
    if(this.optionSelected == 'vof'){
      this.showIdInputFilter = false;
      this.selectedOptions = this.todos.filter(item=>item.completed);
      this.todos = this.todos.sort(function(x, y) {
        let a:number;
        let b:number;
        x.completed == true ? a = 1 : a = 0;
        y.completed == true ? b = 1 : b = 0;
        return b-a;
      });
      return this._todoService.setTodosArrayOffline(this.todos);
    }
    this.showIdInputFilter = true;
    this.selectedOptions = this.todos.filter(item=>item.completed);
    this.arrayFiltered = this.todos.filter((val) => {
      return val.userId == Number(this.idInputFilterValue);
    });
    console.log(this.arrayFiltered);
    return this.arrayFiltered;
  }

  openDialog(event:MouseEvent, todo:Todo) {
    event.stopPropagation();
    this._todoService.setTodoDialog(todo);
    const dialogRef = this.dialog.open(TodoDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  setTodoBooleanOffline(todo:Todo){
    todo.completed = !todo.completed;
    this._todoService.setTodosArrayOffline(this.todos);
    this.todos = this._todoService.getTodosArrayOffline();
    console.log('change', this.todos[todo.id-1].completed);
  }

}
