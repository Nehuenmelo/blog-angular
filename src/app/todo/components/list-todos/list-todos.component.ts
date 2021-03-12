import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.models';
import { TodoService } from '../../services/todo.service';

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

  constructor(private _todoService: TodoService) {
    this._todoService.getTodos().subscribe((data:Todo[]) => {
      this.todos = data;
      this.selectedOptions = this.todos.filter(item=>item.completed);
    });
    console.log(this.selectedOptions);
  }

  ngOnInit(): void {
  }

  changeFilter(){
    if(this.optionSelected == 'vof'){
      this.selectedOptions = this.todos.filter(item=>item.completed);
      this.todos = this.todos.sort(function(x, y) {
        let a:number;
        let b:number;
        x.completed == true ? a = 1 : a = 0;
        y.completed == true ? b = 1 : b = 0;
        return b-a;
     });
      return this.todos;
    }
    return this.todos.sort((a, b) => a.userId-b.userId);
  }

}
