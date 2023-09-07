import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosExComponent } from './todos-ex.component';

describe('TodosExComponent', () => {
  let component: TodosExComponent;
  let fixture: ComponentFixture<TodosExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodosExComponent]
    });
    fixture = TestBed.createComponent(TodosExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
