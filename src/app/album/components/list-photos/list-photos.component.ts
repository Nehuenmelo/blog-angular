import { Component, OnInit } from '@angular/core';
import { Photo } from '../../models/photo.models';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.component.html',
  styleUrls: ['./list-photos.component.scss']
})
export class ListPhotosComponent implements OnInit {
  public idDialog: number = 0;
  public photos: Photo[] = [];

  constructor(private _albumService: AlbumService) {
    this.idDialog = this._albumService.getIdDialog();
    this._albumService.getPhotosOfAlbum(this.idDialog).subscribe((data:Photo[]) => {
      this.photos = data;
    });
  }

  ngOnInit(): void {
  }

}
