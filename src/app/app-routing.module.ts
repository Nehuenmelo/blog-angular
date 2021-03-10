import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './user/components/list-users/list-users.component';

const routes: Routes = [
  { path: '**', component: ListUsersComponent },
  { path: 'users', component: ListUsersComponent },
  { path: 'posts', component: ListUsersComponent },
  { path: 'albums', component: ListUsersComponent },
  { path: 'todos', component: ListUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
