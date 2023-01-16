import { Injectable, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, filter, of, switchMap, takeUntil } from 'rxjs';
import { Store } from '@ngxs/store';
import { SetRecipe } from '../redux/form.actions';

@Injectable({
  providedIn: 'root',
})
export class PathFormService implements OnDestroy {
  protected readonly destroy$ = new Subject<void>();

  constructor(
    protected readonly store: Store,
    protected readonly router: Router
  ) {
    this.subscribeOnPathChange();
  }

  protected readonly recipeIdRegex = new RegExp(/\/recipe\/(\d+)/);

  protected subscribeOnPathChange() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        switchMap(_event => {
          const event = _event as NavigationEnd;
          const recipe = this.recipeIdRegex.exec(event.url);
          if (!recipe || recipe.length < 1) {
            return of(null);
          }

          const recipeId = Number(recipe[1]);
          return this.store.dispatch(new SetRecipe({ recipeId }));
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
