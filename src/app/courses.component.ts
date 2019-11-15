import { Component } from '@angular/core';
import { CoursesService} from './courses.service';
@Component({
  selector : 'courses',
  template : `<h2>{{ title }}</h2>
      <ul>
        <li *ngFor="let course of courses">
          {{course}}
        </li>
      </ul>
      <button (click)="onSave()">Save</button><br>
      <input [(ngModel)]="email"(keyup.enter)="onKeyUp()"/><br>
      {{courseData.title | uppercase}}<br>
       {{courseData.rating}}<br>
        {{courseData.price}}<br>
        {{courseData.students}}<br>
        {{courseData.releaseData}}<br>

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
   onSave(){
     console.log("button clicked");
   } 

  email ="me@email.com";
  onKeyUp(email){
        console.log(this.email);
  }
  courseData = {
    title: "angular app",
    rating: 3.459,
    students : 30520,
    price :190.92,
    releaseData: new Date(2019, 11 , 12)
  }
  
}