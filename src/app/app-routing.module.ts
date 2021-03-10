import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPostsComponent } from './post/components/list-posts/list-posts.component';
import { ListUsersComponent } from './user/components/list-users/list-users.component';

const routes: Routes = [
  { path: 'users', component: ListUsersComponent },
  { path: 'posts', component: ListPostsComponent },
  { path: 'albums', component: ListUsersComponent },
  { path: 'todos', component: ListUsersComponent },
  { path: '**', component: ListUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
