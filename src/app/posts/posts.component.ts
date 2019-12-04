import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from './post.service';
import { AppError } from './app-error';
import { NotFoundError } from './not-found-error';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private service: PostService){
  }
  ngOnInit(){
    this.service.getPosts()
    .subscribe(response =>{
      this.posts = response.json();
    }, error =>{
      alert('An error is occureed');
      console.log(error);
    })
  }
  createPost(input : HTMLInputElement){
    let post = {title : input.value};
   //event.value = '';
   this.service.createPosts(post)
      .subscribe(response => {
           post['id'] = response.json().id;
           this.posts.push;
    },error =>{
      alert('An error is occureed');
      console.log(error);
    });
  }
  updatePost(post){
  this.service.updatePosts(post)
    .subscribe(response=>{
      console.log(response.json());
    },error =>{
      alert('An error is occureed');
      console.log(error);
    });
  }
  deletePost(post){
    this.service.deletePosts(1000)
    .subscribe(
      response=>{
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      //console.log(response.json());
    },(error : AppError ) => {
      if(error instanceof NotFoundError){
        alert('this post has already deleted.')
      }else{
      alert('An error is occureed');
      console.log(error);
      }
    });
  }
  
}
