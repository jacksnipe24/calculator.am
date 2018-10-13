import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MAT_DATE_LOCALE,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule,
  MatTableModule,
  MatTabsModule,
  MatIconModule
} from '@angular/material';

import { CagrCalcComponent } from './components/cagr-calc/cagr-calc.component';
import { CompoundInterestCalcComponent } from './components/compound-interest-calc/compound-interest-calc.component';
import { CarLoanCalcComponent } from './components/car-loan-calc/car-loan-calc.component';
import { CreditCardCalcComponent } from './components/credit-card-calc/credit-card-calc.component';
import { SharedModule } from '../shared/shared.module';
import { FinancialDashboardComponent } from './components/financial-dashboard/financial-dashboard.component';
import { FinancialRoutingModule } from './financial-routing.module';

const components = [
  FinancialDashboardComponent,
  CagrCalcComponent,
  CompoundInterestCalcComponent,
  CarLoanCalcComponent,
  CreditCardCalcComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FinancialRoutingModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
    MatTabsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatTableModule
  ],
  declarations: [...components],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'ru' }]
})
export class FinancialModule {}
