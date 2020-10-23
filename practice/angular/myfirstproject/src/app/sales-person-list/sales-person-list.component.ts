import { Component, OnInit } from '@angular/core';
import {SalesPerson} from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  constructor() { }
  index = 1;

  salesPersonList: SalesPerson[] = [
    new SalesPerson(1, 'Anup', 'Kumar', 'anup.kumar@luv2code.com', 50000),
    new SalesPerson(2, 'John', 'Doe', 'john.doe@luv2code.com', 40000),
    new SalesPerson(3, 'Claire', 'Murphy', 'claire.murphy@luv2code.com', 90000),
    new SalesPerson(4, 'Mai', 'Truong', 'mai.truong@luv2code.com', 60000),
    new SalesPerson(5, 'John', 'Doe', 'john.doe@luv2code.com', 34000)
  ];


  ngOnInit(): void {
  }

}



