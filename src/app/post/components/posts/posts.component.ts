import { Component, OnInit } from '@angular/core';
import { ListPostsComponent } from '../list-posts/list-posts.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public postId: string = '0';
  constructor() { }

  ngOnInit(): void {
  }

}
