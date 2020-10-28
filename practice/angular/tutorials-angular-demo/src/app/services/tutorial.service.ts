import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class TutorialService {

  public  baseUrl = 'http://localhost:3000/api/tutorials';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {

    return this.http.get(this.baseUrl);

  }


}
