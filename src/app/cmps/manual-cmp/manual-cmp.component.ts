import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
    selector: 'manual-cmp',
    templateUrl: './manual-cmp.component.html',
    styleUrls: ['./manual-cmp.component.scss']
})
export class ManualCmpComponent implements OnInit,OnChanges {
    @Input() todoInput: Todo | undefined;
    @Input() todo: Todo | undefined;
    @Output() removedTodo = new EventEmitter<Todo>()
    
    todos: Todo[] = []
    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {

        if (this.todoInput) {
            this.todos.push(this.todoInput)
            this.todoInput=undefined
        }

        
        if (this.todo) {
            this.todos.push(this.todo)
            this.todo=undefined

        }

    }

    onRemoveTodo(todoId: string) {
        const todoIdx = this.todos.findIndex(todo => todo._id === todoId)
        const todo = this.todos.find(todo => todo._id === todoId)
        this.removedTodo.emit(todo)
        this.todos.splice(todoIdx, 1)
    }

    trackByFn(idx: number, todo: Todo): string {
        return todo._id
    }
}
