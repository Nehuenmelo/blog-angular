import { Component, OnInit } from '@angular/core';

import { PostService } from '../../services/post.service';
import { UserService } from '../../../user/services/user.service';
import { User } from 'src/app/user/models/user.models';

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
  public user!:User;
  public showUser: boolean = false;
  public userState = 'Detalle usuario';

  constructor(
    private _postsService:PostService,
    private _userService:UserService
  ) {
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
      this.userState = 'Detalle usuario';
      this.showUser = false;
      this.commentsState = 'Ocultar comentarios';
      this.showComments = true;
    }
  }

  getCommentsOfOnePost(){
    this._postsService.getCommentsOfPost(this.idDialog).subscribe((data) => {
      this.postComments = data;
    });
  }

  clickUserEvent(){
    this.getUser();
    if(this.showUser == true){
      this.userState = 'Detalle usuario';
      this.showUser = false;
    } else {
      this.commentsState = 'Ver todos los comentarios';
      this.showComments = false;
      this.userState = 'Ocultar detalle';
      this.showUser = true;
    }
  }

  getUser(){
    this._userService.getUser(this.post.userId).subscribe((data) => {
      this.user = data;
    });
  }

}
