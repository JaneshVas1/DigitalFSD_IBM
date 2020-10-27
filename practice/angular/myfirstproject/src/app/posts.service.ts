import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Post} from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  // @ts-ignore
  getPosts(): Observable<Post[]> {
    // @ts-ignore
    return this.httpClient.get(this.url);
  }

}
