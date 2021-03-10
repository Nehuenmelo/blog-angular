import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './components/list-users/list-users.component';



@NgModule({
  declarations: [ListUsersComponent],
  exports: [ ListUsersComponent ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
