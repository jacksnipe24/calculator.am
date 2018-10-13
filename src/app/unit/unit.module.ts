import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { UnitRoutingModule } from './unit-routing.module';
import { UnitDashboardComponent } from './components/unit-dashboard/unit-dashboard.component';
import { AccelerationCalcComponent } from './components/acceleration-calc/acceleration-calc.component';
import { MassWeightCalculatorComponent } from './components/mass-weight-calculator/mass-weight-calculator.component';
import { AreaCalculatorComponent } from './components/area-calculator/area-calculator.component';
import { DataStorageCalculatorComponent } from './components/data-storage-calculator/data-storage-calculator.component';
import { FuelCalculatorComponent } from './components/fuel-calculator/fuel-calculator.component';
import { LengthDustanceCalculatorComponent } from './components/length-dustance-calculator/length-dustance-calculator.component';
import { PowerCalculatorComponent } from './components/power-calculator/power-calculator.component';
import { PressureCalculatorComponent } from './components/pressure-calculator/pressure-calculator.component';

const components = [
  UnitDashboardComponent,
  AccelerationCalcComponent,
  MassWeightCalculatorComponent,
  AreaCalculatorComponent,
  DataStorageCalculatorComponent,
  FuelCalculatorComponent,
  LengthDustanceCalculatorComponent,
  PowerCalculatorComponent,
  PressureCalculatorComponent
];

@NgModule({
  imports: [
    CommonModule,
    UnitRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
    MatTableModule
  ],
  declarations: [...components]
})
export class UnitModule {}
