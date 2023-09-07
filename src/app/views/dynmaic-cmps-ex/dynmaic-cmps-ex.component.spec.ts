import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynmaicCmpsExComponent } from './dynmaic-cmps-ex.component';

describe('DynmaicCmpsExComponent', () => {
  let component: DynmaicCmpsExComponent;
  let fixture: ComponentFixture<DynmaicCmpsExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynmaicCmpsExComponent]
    });
    fixture = TestBed.createComponent(DynmaicCmpsExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
