import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamiccomponent1Component } from './dynamiccomponent1.component';

describe('Dynamiccomponent1Component', () => {
  let component: Dynamiccomponent1Component;
  let fixture: ComponentFixture<Dynamiccomponent1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Dynamiccomponent1Component]
    });
    fixture = TestBed.createComponent(Dynamiccomponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
