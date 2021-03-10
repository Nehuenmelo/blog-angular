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
  constructor(private _postsService:PostService) {
    this.idDialog = this._postsService.sendIdDialog();
    this._postsService.getOnePost(this.idDialog).subscribe( (data) => {
      console.log(data);
      this.post = data;
    });
  }

  ngOnInit(): void {
    
  }

}
