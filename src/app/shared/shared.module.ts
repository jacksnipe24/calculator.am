import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';

import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { ShareButtonsModule } from '@ngx-share/buttons';

const pipes = [SanitizeHtmlPipe];

@NgModule({
  imports: [CommonModule, ShareButtonsModule],
  declarations: [...pipes],
  exports: [...pipes, ShareButtonsModule]
})
export class SharedModule {}
