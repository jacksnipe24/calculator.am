import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './core/components/dashboard/dashboard.component';
import {CoreModule} from './core/core.module';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'financial', loadChildren: './financial/financial.module#FinancialModule'},
  // {path: 'math', loadChildren: ''},
  // {path: 'unit', loadChildren: ''},
  // {path: '**', loadChildren: ''},
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule, CoreModule]
})
export class AppRoutingModule {
}
