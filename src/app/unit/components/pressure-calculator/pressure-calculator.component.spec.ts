import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressureCalculatorComponent } from './pressure-calculator.component';

describe('PressureCalculatorComponent', () => {
  let component: PressureCalculatorComponent;
  let fixture: ComponentFixture<PressureCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressureCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressureCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
