import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import { TodoRoutingModule } from './todo-routing.module';
import { ListTodosComponent } from './components/list-todos/list-todos.component';
import { TodoService } from './services/todo.service';
import { TodoDialogComponent } from './components/todo-dialog/todo-dialog.component';

const material = [
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatSelectModule,
  MatCardModule,
  MatInputModule
]
@NgModule({
  declarations: [ListTodosComponent, TodoDialogComponent],
  exports: [
    ListTodosComponent,
    material
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    material,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }
