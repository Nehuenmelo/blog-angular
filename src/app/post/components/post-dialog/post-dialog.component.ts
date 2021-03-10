import { Component, OnInit } from '@angular/core';

import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.scss']
})
export class PostDialogComponent implements OnInit {
  public idDialog: number = 0;
  public post: any;
  public postComments: any;
  public showComments: boolean = false;
  public commentsState = 'Ver todos los comentarios';

  constructor(private _postsService:PostService) {
    this.idDialog = this._postsService.getIdDialog();
    this._postsService.getOnePost(this.idDialog).subscribe((data) => {
      console.log(data);
      this.post = data;
    });
  }

  ngOnInit(): void {
    
  }

  clickCommentsEvent(){
    this.getCommentsOfOnePost();
    if(this.showComments == true){
      this.commentsState = 'Ver todos los comentarios';
      this.showComments = false;
    } else {
      this.commentsState = 'Ocultar comentarios';
      this.showComments = true;
    }
  }

  getCommentsOfOnePost(){
    this._postsService.getCommentsOfPost(this.idDialog).subscribe((data) => {
      this.postComments = data;
      console.log(this.postComments);
    });
  }

}
