import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';

import { PostRoutingModule } from './post-module.routing';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { PostService } from './services/post.service';
import { PostDialogComponent } from './components/post-dialog/post-dialog.component';

const material = [
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatSelectModule,
  MatCardModule
]

@NgModule({
  declarations: [
    ListPostsComponent,
    PostDialogComponent
  ],
  exports: [ 
    ListPostsComponent,
    material
  ],
  imports: [
    CommonModule,
    material,
    HttpClientModule,
    PostRoutingModule,
    FormsModule
  ],
  providers: [
    PostService
  ]
})
export class PostModule { }
