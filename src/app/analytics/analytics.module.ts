import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics/analytics.component';
import { GoogleTagService } from './google-tag.service';

@NgModule({
  declarations: [AnalyticsComponent],
  imports: [CommonModule],
  providers: [GoogleTagService],
  bootstrap: [AnalyticsComponent],
})
export class AnalyticsModule {}
