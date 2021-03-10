import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './user/components/list-users/list-users.component';
import { ListPostsComponent } from './post/components/list-posts/list-posts.component';

const routes: Routes = [
  { path: 'users/:id/posts', component: ListPostsComponent },
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
