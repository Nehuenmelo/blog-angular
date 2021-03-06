import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

import { Photo } from '../../models/photo.models';
import { AlbumService } from '../../services/album.service';
import { PhotoDialogComponent } from '../photo-dialog/photo-dialog.component';

@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.component.html',
  styleUrls: ['./list-photos.component.scss']
})
export class ListPhotosComponent implements OnInit {
  public idDialog: number = 0;
  public photoIdDialog: number = 0;
  public photos: Photo[] = [];
  public info: Photo[] = [];
  public photoToDelete!: Photo;

  constructor(
    private _albumService: AlbumService,
    public dialog: MatDialog,
    ) {
    this.idDialog = this._albumService.getIdDialog();
    this._albumService.getPhotosOfAlbum(this.idDialog).subscribe((data:Photo[]) => {
      this.photos = data;
    });
  }

  ngOnInit(): void {
  }

  openDialog(photo:Photo) {
    this._albumService.setIdDialog(photo.albumId);
    this._albumService.setPhotoIdDialog(photo.id);
    const dialogRef = this.dialog.open(PhotoDialogComponent);
  }

  deletePhoto(photo:Photo) {
    Swal.fire({
      title: 'Estás seguro?',
      text: 'No se podrán revertir los cambios!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then(result => {
      if(result.value){
        this._albumService.deletePhoto(photo).subscribe((data:Photo) => {
          this.photos = this.photos.filter(item => item.id != photo.id);
        });
        Swal.fire('Eliminada!', 'La foto ha sido eliminada', 'success');
      }
    })
  }

}
