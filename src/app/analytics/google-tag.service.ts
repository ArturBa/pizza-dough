import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

const gTagValue = 'G-4J7MDXXQLZ';

@Injectable()
export class GoogleTagService {
  constructor(protected readonly router: Router) {}

  initNavigation(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          gtag('config', gTagValue, {
            page_page: event.urlAfterRedirects,
            page_location: document.location.href,
          });
        }
      });
  }
}
