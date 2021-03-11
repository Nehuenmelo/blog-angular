import { Component, OnInit } from '@angular/core';
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
  public idDialog: number = 0;
  public album!: Album;
  public showUser: boolean = false;
  public userState: string = 'Detalle usuario';
  public user!: User;

  constructor(
    private _albumService: AlbumService,
    private _userService: UserService
  ) { 
    this.idDialog = this._albumService.getIdDialog();
    this._albumService.getAlbum(this.idDialog).subscribe((data:Album) => {
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
