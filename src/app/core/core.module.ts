import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import {MatToolbarModule, MatCardModule, MatButtonModule} from '@angular/material';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';


const components = [NavComponent, DashboardComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [...components],
  exports: [...components]
})
export class CoreModule { }
