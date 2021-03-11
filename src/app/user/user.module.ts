import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-module.routing';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';

import { PostModule } from '../post/post.module';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { UserService } from './services/user.service';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';

const material = [
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatDialogModule
]
@NgModule({
  declarations: [ 
    ListUsersComponent, 
    UserDialogComponent  
  ],
  exports: [ 
    ListUsersComponent,
    material
  ],
  imports: [
    CommonModule,
    material,
    HttpClientModule,
    UserRoutingModule,
    PostModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
