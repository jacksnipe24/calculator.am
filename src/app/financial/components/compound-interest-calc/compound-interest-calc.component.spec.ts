import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundInterestCalcComponent } from './compound-interest-calc.component';

describe('CompoundInterestCalcComponent', () => {
  let component: CompoundInterestCalcComponent;
  let fixture: ComponentFixture<CompoundInterestCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoundInterestCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoundInterestCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
