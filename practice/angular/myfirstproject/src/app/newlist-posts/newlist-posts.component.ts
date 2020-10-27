import { Component, OnInit } from '@angular/core';
import {NewpostsService} from "../newposts.service";
import {Subscription} from "rxjs";
import { Post } from '../post.model';

@Component({
  selector: 'app-newlist-posts',
  templateUrl: './newlist-posts.component.html',
  styleUrls: ['./newlist-posts.component.css']
})
export class NewlistPostsComponent implements OnInit {
  posts: Post[] = [];

  private postsSub: Subscription;



  constructor(public postsService: NewpostsService) {}



  // tslint:disable-next-line:typedef

  ngOnInit() {

    this.postsService.getPosts();

    this.postsSub = this.postsService.getPostUpdateListener()

      .subscribe((posts: Post[]) => {

        this.posts = posts;

      });

  }
}
