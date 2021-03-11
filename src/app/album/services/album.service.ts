import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../models/album.models';
import { Photo } from '../models/photo.models';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  public idDialog:number = 0;
  public photoIdDialog:number = 0;

  constructor(private httpclient:HttpClient) { }

  getAlbum(id:number) {
    return this.httpclient.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
    
  getAlbums() {
    return this.httpclient.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getPhotosOfAlbum(id:number) {
    return this.httpclient.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }

  setIdDialog(id:number){
    this.idDialog = id;
  }

  getIdDialog(){
    return this.idDialog;
  }

  setPhotoIdDialog(id:number){
    this.photoIdDialog = id;
  }

  getPhotoIdDialog(){
    return this.photoIdDialog;
  }

  deletePhoto(photo:Photo){
    fetch(`https://jsonplaceholder.typicode.com/album/${photo.albumId}/photos`, {
      // no hay forma de acceder por url a una unica foto
      // https://jsonplaceholder.typicode.com/albums/2/photos/1  devuelve vacio
      method: 'DELETE',
    });
  }
}
