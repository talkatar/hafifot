import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMaterialComponent } from './dialog-material.component';

describe('DialogMaterialComponent', () => {
  let component: DialogMaterialComponent;
  let fixture: ComponentFixture<DialogMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogMaterialComponent]
    });
    fixture = TestBed.createComponent(DialogMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
