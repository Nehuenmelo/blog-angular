import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import Swal from 'sweetalert2'

import { AlbumRoutingModule } from './album-routing.module';
import { ListAlbumsComponent } from './components/list-albums/list-albums.component';
import { AlbumDialogComponent } from './components/album-dialog/album-dialog.component';
import { ListPhotosComponent } from './components/list-photos/list-photos.component';
import { PhotoDialogComponent } from './components/photo-dialog/photo-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';

const material = [
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule
]

@NgModule({
  declarations: [
    ListAlbumsComponent,
    AlbumDialogComponent,
    ListPhotosComponent,
    PhotoDialogComponent
  ],
  exports: [
    material
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    material,
    HttpClientModule,
    FlexLayoutModule,
  ]
})
export class AlbumModule { }
