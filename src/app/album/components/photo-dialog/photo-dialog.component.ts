import { Component, OnInit } from '@angular/core';
import { Photo } from '../../models/photo.models';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-photo-dialog',
  templateUrl: './photo-dialog.component.html',
  styleUrls: ['./photo-dialog.component.scss']
})
export class PhotoDialogComponent implements OnInit {
  public idDialog: number = 0;
  public photoIdDialog: number = 0;
  public photos: Photo[] = [];
  public photo!: Photo[];
  public showUser: boolean = false;

  constructor(
    private _albumService:AlbumService
  ) { 
    this.idDialog = this._albumService.getIdDialog();
    this.photoIdDialog = this._albumService.getPhotoIdDialog();
    this._albumService.getPhotosOfAlbum(this.idDialog).subscribe((data:Photo[]) => {
      this.photos = data;
      this.photo = this.photos.filter(item => item.id == this.photoIdDialog);
    });
  }

  ngOnInit(): void {
  }

}
