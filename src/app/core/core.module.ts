import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule, MatCardModule, MatButtonModule} from '@angular/material';
import {RouterModule} from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const components = [NavComponent, DashboardComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [...components],
  exports: [...components]
})
export class CoreModule { }
