import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import{ Observable } from 'rxjs/Observable';
import { AppError } from './app-error';
import { NotFoundError } from './not-found-error';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PostService {
    private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor( private http: Http) {  }
  getPosts(){
    return this.http.get(this.url);
  }
  createPosts(post){
    return this.http.post(this.url, JSON.stringify(post));
  }
  updatePosts(post){
    return this.http.patch(this.url + '/' + post.id  , JSON.stringify(post))
  }
  deletePosts(id){
       return this.http.delete(this.url + '/' + id)
       .catch((error: Response)=>{
         if(error.status === 404)
            return Observable.throw( new NotFoundError());

         return Observable.throw( new AppError(error));
       });
  }
}