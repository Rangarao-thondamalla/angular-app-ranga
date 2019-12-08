import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { AuthorComponent } from './author.component';
import { AuthorService } from './author.service';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from './employee.service';
import { FavoriteComponent} from './favorite.component';
import { PanelComponent } from './panel/panel.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { AddListComponent } from './add-list/add-list.component';
import { PostService } from './posts/post.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [
     BrowserModule, 
     FormsModule ,
     HttpModule
     ],
  declarations: [ AppComponent, HelloComponent, CoursesComponent , AuthorComponent, EmployeeComponent, FavoriteComponent, PanelComponent, PostsComponent, AlbumsComponent, AddListComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ CoursesService ,AuthorService ,EmployeeService, PostService ]
})
export class AppModule { }
