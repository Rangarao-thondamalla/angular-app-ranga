import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  albums: any [];
  constructor(http : Http){
    http.get('https://jsonplaceholder.typicode.com/albums')
    .subscribe(response=>{
      this.albums = response.json();
    })
  }
}