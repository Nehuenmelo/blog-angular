import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import { AlbumRoutingModule } from './album-routing.module';
import { ListAlbumsComponent } from './components/list-albums/list-albums.component';
import { AlbumDialogComponent } from './components/album-dialog/album-dialog.component';
import { ListPhotosComponent } from './components/list-photos/list-photos.component';

const material = [
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatCardModule
]

@NgModule({
  declarations: [
    ListAlbumsComponent,
    AlbumDialogComponent,
    ListPhotosComponent
  ],
  exports: [
    material
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    material,
    HttpClientModule
  ]
})
export class AlbumModule { }
