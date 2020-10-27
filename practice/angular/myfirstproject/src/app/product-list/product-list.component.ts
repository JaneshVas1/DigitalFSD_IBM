import { Component, OnInit } from '@angular/core';
import {Genres} from "../Genres";
import {ProductsService} from "../products.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  genres: Genres[];

 constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getProducts()
      .subscribe(response => {
        this.genres = response;
      });



  }





}
