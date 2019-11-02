import { Component } from '@angular/core';
import { AuthorService } from './author.service';
@Component({
  selector : 'Author',
  template :`<h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let Author of Authors">
      {{Author}}
      </li>
    </ul>
  `
})
export class AuthorComponent{
    title = "List of Authors";
    Authors;
    constructor( service : AuthorService){
      this.Authors = service.getAuthors();
    }

}