import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import { Post } from './post.model';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NewpostsService {

  private posts: Post[] = [];

  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {

  }
  getPosts() {

    this.http
      .get<{ message: string; posts: any }>(
        'http://localhost:3000/api/posts'
      )
      .pipe(map((postData) => {
        return postData.posts.map(post => {
          return {
            title: post.title,
            content: post.content,
            id: post._id
          };
        });
      }))

      .subscribe(transformedPosts => {
        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  // tslint:disable-next-line:typedef

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();

  }
}
