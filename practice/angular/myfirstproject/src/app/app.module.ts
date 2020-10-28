import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SalesPersonListComponent } from './sales-person-list/sales-person-list.component';
import { EmployeeAppComponent } from './employee-app/employee-app.component';
import { ListPostComponent } from './list-post/list-post.component';
import {HttpClientModule} from "@angular/common/http";
import { TodosListComponent } from './todos-list/todos-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { NewlistPostsComponent } from './newlist-posts/newlist-posts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  declarations: [
    AppComponent,
    SalesPersonListComponent,
    EmployeeAppComponent,
    ListPostComponent,
    TodosListComponent,
    ProductListComponent,
    HeaderComponent,
    NewlistPostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
