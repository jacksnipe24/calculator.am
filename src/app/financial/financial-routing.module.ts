import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FinancialDashboardComponent} from './components/financial-dashboard/financial-dashboard.component';

const routes: Routes = [
  { path: '', component: FinancialDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialRoutingModule { }
