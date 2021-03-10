import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { PostDialogComponent } from '../post-dialog/post-dialog.component';
import { PostService } from '../../services/post.service';

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

  public posts:Array<any> = [];
  filters: any[] = [
    {value: 'id', viewValue: 'ID'},
    {value: 'title', viewValue: 'Titulo'}
  ];
  public optionSelected: string = '';

  constructor(
    private _postsService: PostService,
    public dialog: MatDialog  
  ) { }

  ngOnInit(): void {
    this._postsService.getPosts().subscribe( (data) => {
      console.log(data);
      this.posts = data;
    });
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
