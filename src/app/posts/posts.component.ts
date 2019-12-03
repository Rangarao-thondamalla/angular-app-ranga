import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private service: PostService){
   
  }
  createPost(input : HTMLInputElement){
    let post = {title : input.value};
   //event.value = '';
   this.service.createPosts(post)
      .subscribe(response => {
           post['id'] = response.json().id;
           this.posts.push;
    });
  }
  updatePost(post){
  this.service.updatePosts(post)
    .subscribe(response=>{
      console.log(response.json());
    })
    //this.http.put(this.url , JSON.stringify(post));
  }
  deletePost(post){
    this.service.deletePosts(post)
    .subscribe(response=>{
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
      //console.log(response.json());
    })
    //this.http.put(this.url , JSON.stringify(post));
  }
  ngOnInit(){
    this.service.getPosts()
    .subscribe(response =>{
      this.posts = response.json();
    })
  }
}
