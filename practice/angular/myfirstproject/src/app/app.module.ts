import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SalesPersonListComponent } from './sales-person-list/sales-person-list.component';
import { EmployeeAppComponent } from './employee-app/employee-app.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesPersonListComponent,
    EmployeeAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
