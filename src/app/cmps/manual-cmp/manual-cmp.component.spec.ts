import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManualCmpComponent } from './manual-cmp.component';

describe('ManualCmpComponent', () => {
  let component: ManualCmpComponent;
  let fixture: ComponentFixture<ManualCmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManualCmpComponent]
    });
    fixture = TestBed.createComponent(ManualCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
