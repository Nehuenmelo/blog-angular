import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from 'src/app/user/models/user.models';
import { UserService } from 'src/app/user/services/user.service';
import { Album } from '../../models/album.models';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-dialog',
  templateUrl: './album-dialog.component.html',
  styleUrls: ['./album-dialog.component.scss']
})
export class AlbumDialogComponent implements OnInit {
  public album!: Album;
  public showUser: boolean = false;
  public userState: string = 'Detalle usuario';
  public user!: User;

  constructor(
    private _albumService: AlbumService,
    private _userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: {idAlbum: number}
  ) { 
    this._albumService.getAlbum(data.idAlbum).subscribe((data:Album) => {
      this.album = data;
    });
  }

  ngOnInit(): void {
  }

  clickUserEvent(){
    this.getUser();
    if(this.showUser == true){
      this.userState = 'Detalle usuario';
      this.showUser = false;
    } else {
      this.userState = 'Ocultar detalle';
      this.showUser = true;
    }
  }

  getUser(){
    this._userService.getUser(this.album.userId).subscribe((data) => {
      this.user = data;
    });
  }

}
