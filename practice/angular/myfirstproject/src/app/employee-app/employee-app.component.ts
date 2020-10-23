import { Component, OnInit } from '@angular/core';
import { RegularEmployee} from "./RegularEmployee";
import {Consultant} from "./Consultant";
import {EmployeeType} from "./EmployeeType";

@Component({
  selector: 'app-employee-app',
  templateUrl: './employee-app.component.html',
  styleUrls: ['./employee-app.component.css']
})
export class EmployeeAppComponent implements OnInit {

  constructor() { }

index=1;
  regEmployeeList: RegularEmployee[] = [
    new RegularEmployee( 'Anup', 'Kumar', 'anup.kumar@luv2code.com', 50000),
    new RegularEmployee( 'John', 'Doe', 'john.doe@luv2code.com', 40000),
    new RegularEmployee( 'Claire', 'Murphy', 'claire.murphy@luv2code.com', 90000),
    new RegularEmployee( 'Mai', 'Truong', 'mai.truong@luv2code.com', 60000),
    new RegularEmployee( 'John', 'Doe', 'john.doe@luv2code.com', 34000)
  ];

  consultantList: Consultant[]=[
    new Consultant("Joest","poo","test@tets.com",34,EmployeeType.DEVELOPER),
    new Consultant("Claire","Truong","test@tets.com",34,EmployeeType.CONSULTANT),
    new Consultant("John","Doe","test@tets.com",34,EmployeeType.DEVELOPER),

  ];





ngOnInit(): void {
  }

}
