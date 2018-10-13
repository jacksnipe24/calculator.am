import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CagrCalcComponent } from './cagr-calc.component';

describe('CagrCalcComponent', () => {
  let component: CagrCalcComponent;
  let fixture: ComponentFixture<CagrCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CagrCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CagrCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
