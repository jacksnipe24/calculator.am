import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialRoutingModule } from './financial-routing.module';
import { FinancialDashboardComponent } from './components/financial-dashboard/financial-dashboard.component';
import {MatCardModule} from '@angular/material';

const components = [FinancialDashboardComponent];

@NgModule({
  imports: [
    CommonModule,
    FinancialRoutingModule,
    MatCardModule
  ],
  declarations: [...components],
  exports: [...components]
})
export class FinancialModule { }
