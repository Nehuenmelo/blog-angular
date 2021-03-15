import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { User } from 'src/app/user/models/user.models';
import { UserService } from 'src/app/user/services/user.service';
import { Album } from '../../models/album.models';
import { AlbumService } from '../../services/album.service';
import { AlbumDialogComponent } from '../album-dialog/album-dialog.component';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.scss']
})
export class ListAlbumsComponent implements OnInit {
  public idUser: number = 0;
  public existUserId: boolean = false;
  public response:any;
  public user!: User;
  public albums: Album[] = [];

  constructor(
    public dialog: MatDialog,
    private _albumService: AlbumService,
    private _userService: UserService,
    private route: ActivatedRoute,
  ) { 
    this.response = this.route.snapshot.paramMap.get('id');
    this.idUser = this.response;
  }

  ngOnInit(): void {
    this.listAllOrUserAlbums();
  }

  listAllOrUserAlbums(){
    if(this.idUser === null){
      this.existUserId = false;
      this._albumService.getAlbums().subscribe( (data) => {
        this.albums = data;
      });
    } else {
      this.existUserId = true;
      this._userService.getAlbumsOfOneUser(this.idUser).subscribe( (data) => {
        this.albums = data;
      });
      this._userService.getUser(this.idUser).subscribe( (data) => {
        this.user = data;
      });
    }
  }

  openDialog(id:any) {
    this._albumService.setIdDialog(id);
    const dialogRef = this.dialog.open(AlbumDialogComponent, {data:{idAlbum:id}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
