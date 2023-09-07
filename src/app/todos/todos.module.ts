import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosExComponent } from '../views/todos-ex/todos-ex.component'
import { TodosInputComponent } from '../cmps/todos-input/todos-input.component'
import { ManualCmpComponent } from '../cmps/manual-cmp/manual-cmp.component'
import { AutoCmpComponent } from '../cmps/auto-cmp/auto-cmp.component'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TodoColorDirective } from '../directive/todo-color.directive'

@NgModule({
  declarations: [
    TodosExComponent,
    TodosInputComponent,
    ManualCmpComponent,
    AutoCmpComponent,
    TodoColorDirective,
  ],

  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports:[
    TodosExComponent,
    TodosInputComponent,
    ManualCmpComponent,
    AutoCmpComponent,
//todo: spaces
  ]
})
export class TodosModule { }