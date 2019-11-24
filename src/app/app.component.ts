import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ranga time is ranga: ';
  url = 'https://www.youtube.com/watch?v=k5E2AVpwsko';
  post = {  
    title : "titile",
    isFavorite :true
  }
  onFavoriteChanged(){
    console.log("Favorite Changed");
  }
  radioData = [1,2];
  viewMode = "map";
  classes=[
    {id:1, name:'class1'},
    {id:2, name:'class2'},
    {id:3, name:'class3'},
    {id:4, name:'class4'},
  ]
  onAdd(){
    this.classes.push({ id :5 ,name:'class5'});
  }
  onRemove(classes){
    let index = this.classes.indexOf(classes);
    this.classes.splice(index,1);
  }
}
