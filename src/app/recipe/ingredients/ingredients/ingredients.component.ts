import { Component, OnDestroy } from '@angular/core';
import { Select } from '@ngxs/store';
import { DoughState, WeightUnitTypes } from '../../../dough/redux';
import { Observable, Subject, combineLatest, map, filter } from 'rxjs';
import { RecipeState } from '../../redux/recipe.state';
import { RecipeIngredients, RecipeItem } from '../../redux/recipe.model';
import { RowDataInterface } from '../../../components/table/row/row.component';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnDestroy {
  protected readonly destroy$ = new Subject<void>();

  protected readonly rowTitle = new Map<keyof RecipeIngredients, string>([
    ['flour', 'Flour'],
    ['water', 'Water'],
    ['yeast', 'Yeast or Starter'],
    ['salt', 'Salt'],
    ['oil', 'Oil/Lards/Shortening'],
    ['sugar', 'Sugar'],
    ['other', 'Other'],
  ]);

  @Select(DoughState.weightUnit$)
  readonly weightUnit$!: Observable<WeightUnitTypes>;

  @Select(DoughState.doughWeight$)
  readonly doughWeight$!: Observable<number>;

  @Select(DoughState.doughCount$)
  readonly doughCount$!: Observable<number>;

  @Select(RecipeState.getSelectedRecipe)
  readonly selectedRecipe$!: Observable<RecipeItem>;

  get tableData$(): Observable<RowDataInterface[]> {
    return combineLatest([
      this.doughWeight$,
      this.doughCount$,
      this.selectedRecipe$,
    ]).pipe(
      filter(v => v.every(l => !!l)),
      map(value => {
        const [weight, count, recipe] = value;
        const totalWeight = weight * count;

        const totalBakers = Object.values(recipe.ingredients)
          .map(i => i.bakers)
          .reduce((a, b) => Number(a) + Number(b), 0);

        return Object.entries(recipe.ingredients).map(([k, v]) => ({
          title: this.rowTitle.get(k as keyof RecipeIngredients) ?? k,
          weight: (v.bakers / totalBakers) * totalWeight,
          recommended: v.recommended,
        }));
      })
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
