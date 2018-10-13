import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthDustanceCalculatorComponent } from './length-dustance-calculator.component';

describe('LengthDustanceCalculatorComponent', () => {
  let component: LengthDustanceCalculatorComponent;
  let fixture: ComponentFixture<LengthDustanceCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LengthDustanceCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthDustanceCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
