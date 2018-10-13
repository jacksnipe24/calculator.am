import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStorageCalculatorComponent } from './data-storage-calculator.component';

describe('DataStorageCalculatorComponent', () => {
  let component: DataStorageCalculatorComponent;
  let fixture: ComponentFixture<DataStorageCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataStorageCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataStorageCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
