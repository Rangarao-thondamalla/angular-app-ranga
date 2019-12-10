import { Component, OnInit } from '@angular/core';
import { trigger ,transition,animate ,style} from '@angular/animations';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations : [
    trigger('fade',[
      transition('void=> *',[
        style({ color :'red' }),
        animate(2000)
      ])
    ])
  ]
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}