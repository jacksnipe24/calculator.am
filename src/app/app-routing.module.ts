import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Calculator.am',
      description: 'some text'
    }
  },
  {
    path: 'finansakan',
    loadChildren: './financial/financial.module#FinancialModule'
  },
  // {path: 'math', loadChildren: ''},
  { path: 'miavorayin', loadChildren: './unit/unit.module#UnitModule' }
  // {path: '**', loadChildren: ''},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
