import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AnalyticsModule } from './analytics/analytics.module';
import { AnalyticsComponent } from './analytics/analytics/analytics.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { FormModule } from './form/form.module';
import { NgxsModule } from '@ngxs/store';
import env from '../environments/environment';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnalyticsModule,
    ComponentsModule,
    FormModule,
    NgxsModule.forRoot([], {
      developmentMode: !env.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: env.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent, AnalyticsComponent],
})
export class AppModule {}
