import { Component, Input,OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { GlobalVariables} from '../../../../environment';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'todos-ex',
  templateUrl: './todos-ex.component.html',
  styleUrls: ['./todos-ex.component.scss']
})

export class TodosExComponent implements OnInit   {
  constructor(private routeService:RouteService){}

  @Input() todoInput: Todo|undefined;
  @Input() todo: Todo|undefined;
  @Input() removedTodo: Todo|undefined;

  ngOnInit(): void {
    this.routeService.routePath$.next(GlobalVariables.todosExComponentPath);   
  }

  setTodo(todo:Todo){
    this.todo={...todo};
  }
  setRemovedTodo(todo:Todo){
    this.removedTodo={...todo};
  }
}