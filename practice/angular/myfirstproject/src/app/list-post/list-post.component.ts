import { Component, OnInit } from '@angular/core';
import {Post} from "../post";

import {PostsService} from '../posts.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostsService) {
  }


  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe(response => {
        this.posts = response;
      });
  }

}
