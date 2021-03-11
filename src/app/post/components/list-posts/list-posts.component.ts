import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { PostDialogComponent } from '../post-dialog/post-dialog.component';
import { PostService } from '../../services/post.service';
import { UserService } from '../../../user/services/user.service';

interface Filter {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {
  public idPost:number = 0;
  public response:any;
  public existUserId: boolean = false;
  public user: any;
  public posts:Array<any> = [];
  filters: Filter[] = [
    {value: 'id', viewValue: 'ID de usuario'},
    {value: 'title', viewValue: 'Titulo'}
  ];
  public optionSelected: string = '';

  constructor(
    private _postsService: PostService,
    private _userService: UserService,
    private route: ActivatedRoute,
    public dialog: MatDialog  
  ) { 
    this.response = this.route.snapshot.paramMap.get('id');
    console.log(this.response);
    this.idPost = this.response;
  }

  ngOnInit(): void {
    if(this.idPost === null){
      this.existUserId = false;
      this._postsService.getPosts().subscribe( (data) => {
        this.posts = data;
      });
    } else {
      this.existUserId = true;
      this._userService.getPostsOfOneUser(this.idPost).subscribe( (data) => {
        this.posts = data;
      });
      this._userService.getUser(this.idPost).subscribe( (data) => {
        this.user = data;
      });
    }
    
  }

  openDialog(id:any) {
    this._postsService.setIdDialog(id);
    const dialogRef = this.dialog.open(PostDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  changeFilter(){
    if(this.optionSelected == 'title'){
      return this.posts.sort((a, b) => a.title.localeCompare(b.title));
    }
    return this.posts.sort((a, b) => a.id-b.id);
  }

}
