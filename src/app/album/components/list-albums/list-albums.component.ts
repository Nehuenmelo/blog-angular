import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Album } from '../../models/album.models';
import { AlbumService } from '../../services/album.service';
import { AlbumDialogComponent } from '../album-dialog/album-dialog.component';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.scss']
})
export class ListAlbumsComponent implements OnInit {
  public albums: Album[] = [];

  constructor(
    public dialog: MatDialog,
    private _albumService: AlbumService
  ) { }

  ngOnInit(): void {
    this._albumService.getAlbums().subscribe( (data) => {
      this.albums = data;
    });
  }

  openDialog(id:any) {
    this._albumService.setIdDialog(id);
    const dialogRef = this.dialog.open(AlbumDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
