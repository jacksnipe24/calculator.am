import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardCalcComponent } from './credit-card-calc.component';

describe('CreditCardCalcComponent', () => {
  let component: CreditCardCalcComponent;
  let fixture: ComponentFixture<CreditCardCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
