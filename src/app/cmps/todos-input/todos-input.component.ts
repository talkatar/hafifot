import { Component, EventEmitter, Output, Input, SimpleChanges, OnChanges,ViewChild } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { Form, NgForm } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'todos-input',
  templateUrl: './todos-input.component.html',
  styleUrls: ['./todos-input.component.scss']
})
export class TodosInputComponent implements OnChanges {
  @ViewChild(MatFormField) formField!: MatFormField;

  @Output() todoInput = new EventEmitter<Todo>()
  @Input() removedTodo: Todo | undefined
  todoName: string = ''
  form:NgForm| undefined
  inputValue: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['removedTodo']) {
    //   this.form?.controls['todoName'].setValue(this.removedTodo?.name)
    // }
  }

    onSubmit(form: NgForm,inputRef:any) {
      if (form.valid) {
        this.form=form
        const todo = { _id: this.getRandomId(), name: this.todoName }
        this.todoInput.emit(todo)
        const control = inputRef.control
        control.setErrors(null);
      }
    }
    setTodo(todo: Todo, form: NgForm){
      form.controls['todoName'].setValue(todo);

    }

    getRandomId(length = 8): string {
      let result = ''
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      }
      return result
    }
  }
  
