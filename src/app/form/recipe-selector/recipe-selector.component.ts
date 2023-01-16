import { Component, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetRecipes, SetRecipe } from '../redux/form.actions';
import { Observable, Subject, filter, takeUntil } from 'rxjs';
import { FormState } from '../redux/form.store';
import { RecipeListItem } from '../redux/form.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipe-selector',
  templateUrl: './recipe-selector.component.html',
  styleUrls: ['./recipe-selector.component.scss'],
})
export class RecipeSelectorComponent implements OnDestroy {
  @Select(FormState.getRecipes) protected readonly recipes$:
    | Observable<RecipeListItem[]>
    | undefined;

  @Select(FormState.getSelectedRecipe) protected readonly selectedRecipe$:
    | Observable<number>
    | undefined;

  control = new FormControl();

  protected readonly destroy$ = new Subject<boolean>();

  constructor(protected readonly store: Store) {
    store.dispatch(new GetRecipes());
    this.subscribeToControlChanged();
    this.subscribeToStoreChanged();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  protected subscribeToControlChanged = () => {
    this.control.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        filter(
          newValue =>
            newValue !== this.store.selectSnapshot(FormState.getSelectedRecipe)
        ),
        filter(value => value !== null)
      )
      .subscribe(value => {
        this.store.dispatch(new SetRecipe({ recipeId: value }));
      });
  };

  protected subscribeToStoreChanged = () => {
    this.selectedRecipe$
      ?.pipe(
        takeUntil(this.destroy$),
        filter(newValue => newValue !== this.control.value)
      )
      .subscribe(newValue => this.control.setValue(newValue));
  };
}
