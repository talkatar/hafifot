import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosInputComponent } from './todos-input.component';

describe('TodosInputComponent', () => {
  let component: TodosInputComponent;
  let fixture: ComponentFixture<TodosInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodosInputComponent]
    });
    fixture = TestBed.createComponent(TodosInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
