import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExComponent } from './dialog-ex.component';

describe('DialogExComponent', () => {
  let component: DialogExComponent;
  let fixture: ComponentFixture<DialogExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogExComponent]
    });
    fixture = TestBed.createComponent(DialogExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
