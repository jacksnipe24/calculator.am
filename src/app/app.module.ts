import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material';

import { ShareButtonsModule } from '@ngx-share/buttons';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { CalcFunctionsService } from './core/services/cacl-functions.service';
import { PageService } from './core/services/page.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    ShareButtonsModule.forRoot()
  ],
  providers: [CalcFunctionsService, PageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
