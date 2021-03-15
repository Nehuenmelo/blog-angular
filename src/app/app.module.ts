import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { AlbumModule } from './album/album.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TodoModule } from './todo/todo.module';

const material = [
  MatToolbarModule,
  MatButtonModule,
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    UserModule,
    PostModule,
    AlbumModule,
    TodoModule,
    material,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
