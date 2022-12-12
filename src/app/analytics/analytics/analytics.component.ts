import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { GoogleTagService } from '../google-tag.service';

@Component({
  selector: 'app-analytics',
  styles: [':host {display:none;visibility:hidden}'],
  template: '',
})
export class AnalyticsComponent implements AfterViewInit, OnDestroy {
  protected destroy$ = new Subject<boolean>();

  constructor(protected readonly googleTagService: GoogleTagService) {}

  ngAfterViewInit(): void {
    this.googleTagService.initNavigation();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
