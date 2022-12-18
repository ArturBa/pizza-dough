import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AnalyticsModule } from './analytics/analytics.module';
import { AnalyticsComponent } from './analytics/analytics/analytics.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { FormModule } from './form/form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnalyticsModule,
    ComponentsModule,
    FormModule,
  ],
  providers: [],
  bootstrap: [AppComponent, AnalyticsComponent],
})
export class AppModule {}
