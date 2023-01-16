import { Action, Selector, State, StateContext } from '@ngxs/store';
import { RecipeItem, RecipeStateModel } from './recipe.model';
import { Injectable } from '@angular/core';
import { RecipeService } from '../service/recipe.service';
import { SetRecipeId } from './recipe.actions';
import { tap } from 'rxjs';

type Ctx = StateContext<RecipeStateModel>;

@State<RecipeStateModel>({
  name: 'recipeInfo',
  defaults: {
    recipes: new Map(),
    selected: null,
  },
})
@Injectable()
export class RecipeState {
  constructor(protected readonly recipeService: RecipeService) {}

  @Selector()
  static getSelectedRecipe(state: RecipeStateModel): RecipeItem | null {
    return state.selected;
  }

  @Action(SetRecipeId)
  setRecipeIdAction(ctx: Ctx, setRecipeId: SetRecipeId) {
    const recipeId = setRecipeId.payload.recipeId;
    const newSelected = ctx.getState().recipes.get(recipeId);
    if (newSelected) {
      ctx.patchState({ selected: newSelected });
      return;
    }

    return this.recipeService.getRecipe(recipeId).pipe(
      tap(recipe => {
        const cachedRecipes = ctx.getState().recipes;
        recipe = { ...recipe, id: recipeId };
        cachedRecipes.set(recipeId, recipe);
        ctx.setState({ selected: recipe, recipes: cachedRecipes });
      })
    );
  }
}
