import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector : "Favorite",
  templateUrl : './favorite.component.html'
})
export class FavoriteComponent implements OnInit {
  @Input ('is-Favorite') isFavorite: boolean;
  @Output() change = new EventEmitter();
  constructor(){} 
  ngOnInit(){

  }
  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit();
  }
}