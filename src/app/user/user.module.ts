import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';

import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { UserService } from './services/user.service';

import { ListUsersComponent } from './components/list-users/list-users.component';


const material = [
  MatListModule,
  MatIconModule,
  MatButtonModule,
]
@NgModule({
  declarations: [ 
    ListUsersComponent  
  ],
  exports: [ 
    ListUsersComponent,
    material
  ],
  imports: [
    CommonModule,
    material,
    HttpClientModule,
    UserRoutingModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
