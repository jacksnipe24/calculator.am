import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassWeightCalculatorComponent } from './mass-weight-calculator.component';

describe('MassWeightCalculatorComponent', () => {
  let component: MassWeightCalculatorComponent;
  let fixture: ComponentFixture<MassWeightCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassWeightCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassWeightCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
