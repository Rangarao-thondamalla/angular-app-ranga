import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { AuthorComponent } from './author.component';
import { AuthorService } from './author.service';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from './employee.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CoursesComponent , AuthorComponent, EmployeeComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ CoursesService ,AuthorService ,EmployeeService ]
})
export class AppModule { }
