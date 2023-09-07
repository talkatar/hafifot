import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCmpComponent } from './auto-cmp.component';

describe('AutoCmpComponent', () => {
  let component: AutoCmpComponent;
  let fixture: ComponentFixture<AutoCmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoCmpComponent]
    });
    fixture = TestBed.createComponent(AutoCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
