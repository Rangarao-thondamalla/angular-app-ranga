import { Component } from '@angular/core';
import { CoursesService} from './courses.service';
@Component({
  selector : 'courses',
  template : `<h2>{{ title }}</h2>
    <img src= "{{imageUrl}}" />
      <ul>
        <li *ngFor="let course of courses">
          {{course}}
        </li>
      </ul>
  `
})
export class CoursesComponent{
  title = "List of Courses";
  imageUrl = "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg";
  courses;
  //logic for calling an HTTPservice.
  constructor (service: CoursesService){
    this.courses = service.getCourses();
  }

}