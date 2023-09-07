import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesExComponent } from './directives-ex.component';

describe('DirectivesExComponent', () => {
  let component: DirectivesExComponent;
  let fixture: ComponentFixture<DirectivesExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesExComponent]
    });
    fixture = TestBed.createComponent(DirectivesExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
