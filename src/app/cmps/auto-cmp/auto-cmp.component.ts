import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'auto-cmp',
  templateUrl: './auto-cmp.component.html',
  styleUrls: ['./auto-cmp.component.scss']
})
export class AutoCmpComponent implements OnInit, OnChanges {

  @Output() todo = new EventEmitter<Todo>()
  @Input() removedTodo: Todo | undefined

  todos: Todo[] = [
    { _id: "1", name: "Going to the beach" },
    { _id: "2", name: "Watch a movie" },
    { _id: "3", name: "Playing basketball" },
    { _id: "4", name: "Yellow is the most beautiful color" },
    { _id: "5", name: "Hapoel t-shirt is red " },
    { _id: "6", name: "The sky color is blue " },
  ]

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['removedTodo']) {
     this.removedTodo&& this.todos.push(this.removedTodo)
    }
    // if (this.removedTodo) {
    //   this.todos.push(this.removedTodo)
    // }
  }

  ngOnInit(): void { }

  removingTodo(todo: Todo) {
    this.todos.push(todo)
  }

  onAddTodo(todoId: string) {
    const todoIdx = this.todos.findIndex(todo => todo._id === todoId)
    const todo = this.todos.find(todo => todo._id === todoId)
    this.todo.emit(todo)
    this.todos.splice(todoIdx, 1)
  }
  onSubmit() {

    this.todos.push();
  }
  trackByFn(idx: number, todo: Todo): string {
    return todo._id
  }
}
