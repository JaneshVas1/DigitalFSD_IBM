import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Genres} from "./genres";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = 'http://localhost:3000/api/genres';
  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  // @ts-ignore
  getProducts(): Observable<Products[]> {
    // @ts-ignore
    return this.httpClient.get(this.url);

  }




}
