import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccelerationCalcComponent } from './acceleration-calc.component';

describe('AccelerationCalcComponent', () => {
  let component: AccelerationCalcComponent;
  let fixture: ComponentFixture<AccelerationCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccelerationCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccelerationCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
