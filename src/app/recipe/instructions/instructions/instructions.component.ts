import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { RecipeState } from '../../redux/recipe.store';
import { Observable, filter, map } from 'rxjs';
import { RecipeItem } from '../../redux/recipe.model';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss'],
})
export class InstructionsComponent {
  @Select(RecipeState.getSelectedRecipe)
  protected readonly recipe$!: Observable<RecipeItem | null>;

  get recipeDetails$(): Observable<string | undefined> {
    return this.recipe$.pipe(
      filter(recipe => !!recipe),
      map(recipe => recipe?.recipe)
    );
  }
}
