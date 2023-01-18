import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subject, catchError, from, switchMap, takeUntil } from 'rxjs';
import { SetRecipeId } from '../redux/recipe.actions';
import { defaultFormStateModel } from '../../form/redux/form.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnDestroy {
  protected readonly destroy$ = new Subject<void>();

  constructor(
    protected readonly store: Store,
    protected readonly route: ActivatedRoute,
    protected readonly router: Router
  ) {
    this.subscribeToRoute();
  }

  protected subscribeToRoute() {
    this.route.params
      .pipe(
        switchMap(params => {
          return this.store.dispatch(
            new SetRecipeId({ recipeId: params['id'] })
          );
        }),
        takeUntil(this.destroy$),
        catchError(() => {
          return from(
            this.router.navigate([
              'recipe',
              defaultFormStateModel.selectedRecipe,
            ])
          );
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
