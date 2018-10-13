import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarLoanCalcComponent } from './car-loan-calc.component';

describe('CarLoanCalcComponent', () => {
  let component: CarLoanCalcComponent;
  let fixture: ComponentFixture<CarLoanCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarLoanCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarLoanCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
