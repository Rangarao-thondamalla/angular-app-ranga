import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
message= '';
items: any =[];
onClick(){
  this.items.push(this.message);
  this.message = '';
}

  constructor() { }

  ngOnInit() {
  }

}