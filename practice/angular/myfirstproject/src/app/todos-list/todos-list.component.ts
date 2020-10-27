import { Component, OnInit } from '@angular/core';
import {Post} from "../post";
import {Todos} from "../todos";
import {TodosService} from "../todos.service";

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  todos: Todos[];
  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
    this.todosService.getTodos()
      .subscribe(response => {
        this.todos = response;
      });
  }

}
