// import { HttpClient } from '@angular/common/http';
import { HttpModule } from "@angular/http"
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {
  private todos = [];
  private archiveTodos = [];

  constructor(public http: HttpModule) {
    console.log('Hello TodoProvider Provider');
  }

  archiveTodo(todoIndex){
    let todoToBeArchived = this.todos[todoIndex];
    this.todos.splice(todoIndex, 1);
    this.archiveTodos.push(todoToBeArchived);
  }

  getTodos(){
    return this.todos;
  }

  getArchiveTodos(){
    return this.archiveTodos;
  }

  addTodo(todo){
    this.todos.push(todo);
  }

}
