import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancialDashboardComponent } from './components/financial-dashboard/financial-dashboard.component';
import { CagrCalcComponent } from './components/cagr-calc/cagr-calc.component';
import { CompoundInterestCalcComponent } from './components/compound-interest-calc/compound-interest-calc.component';
import { CarLoanCalcComponent } from './components/car-loan-calc/car-loan-calc.component';
import { CreditCardCalcComponent } from './components/credit-card-calc/credit-card-calc.component';

const routes: Routes = [
  { path: '', component: FinancialDashboardComponent },
  { path: 'ytat-hashvich', component: CagrCalcComponent },
  {
    path: 'bard-tokosi-hashvich',
    component: CompoundInterestCalcComponent,
    data: {
      title: 'sfsaf',
      description:
        'Օգտագործեք մեր օգտակար հաշվիչները՝ ձեր խնայողությունների բարդ տոկոսը հաշվելու համար'
    }
  },
  { path: 'avtomeqenayi-varki-hashvich', component: CarLoanCalcComponent },
  {
    path: 'varkayin-qarteri-vcharman-hashvich',
    component: CreditCardCalcComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialRoutingModule {}
