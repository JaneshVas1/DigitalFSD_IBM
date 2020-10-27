import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todos} from "./todos";

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private url = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  // @ts-ignore
  getTodos(): Observable<Todos[]> {
    // @ts-ignore
    return this.httpClient.get(this.url);

  }


}
