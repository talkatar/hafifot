import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssExComponent } from './css-ex.component';

describe('CssExComponent', () => {
  let component: CssExComponent;
  let fixture: ComponentFixture<CssExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssExComponent]
    });
    fixture = TestBed.createComponent(CssExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
