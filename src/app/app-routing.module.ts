import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './user/components/list-users/list-users.component';
import { ListPostsComponent } from './post/components/list-posts/list-posts.component';
import { ListAlbumsComponent } from './album/components/list-albums/list-albums.component';
import { ListPhotosComponent } from './album/components/list-photos/list-photos.component';
import { ListTodosComponent } from './todo/components/list-todos/list-todos.component';

const routes: Routes = [
  { path: 'users/:id/posts', component: ListPostsComponent },
  { path: 'users/:id/albums', component: ListAlbumsComponent },
  { path: 'users/:id/todos', component: ListTodosComponent },
  { path: 'albums/:id/photos', component: ListPhotosComponent },
  { path: 'users', component: ListUsersComponent },
  { path: 'posts', component: ListPostsComponent },
  { path: 'albums', component: ListAlbumsComponent },
  { path: 'todos', component: ListTodosComponent },
  { path: '**', component: ListUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
