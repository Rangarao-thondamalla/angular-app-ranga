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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Page1Component } from './page-1/page-1.component';
import { Page2Component } from './page-2/page-2.component';

@NgModule({
  imports:      [
     BrowserModule, 
     FormsModule ,
     HttpModule,
     RouterModule.forRoot([
       {path :'page-1',component : Page1Component},
       {path :'page-2',component : Page2Component},
       {path :'courses',component : CoursesComponent},
       {path :'employee',component : EmployeeComponent},
       {path :'**',component : PageNotFoundComponent},
     ])
     ],
  declarations: [ AppComponent, HelloComponent, CoursesComponent , AuthorComponent, EmployeeComponent, FavoriteComponent, PanelComponent, PostsComponent, AlbumsComponent, AddListComponent, PageNotFoundComponent, Page1Component, Page2Component],
  bootstrap:    [ AppComponent ],
  providers:    [ CoursesService ,AuthorService ,EmployeeService, PostService ]
})
export class AppModule { }
