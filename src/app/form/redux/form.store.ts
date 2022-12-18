import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FormService } from '../service/form.service';
import {
  GetOvenTypes,
  GetRecipes,
  SetOvenType,
  SetRecipe,
} from './form.actions';
import { tap } from 'rxjs';
import { FormStateModel, OvenTypes, RecipeListItem } from './form.model';

type Ctx = StateContext<FormStateModel>;

@State<FormStateModel>({
  name: 'formInfo',
  defaults: {
    ovenTypes: [],
    selectedOvenType: 'S',
    recipes: [],
    selectedRecipe: 0,
  },
})
@Injectable()
export class FormState {
  constructor(protected readonly formService: FormService) {}

  @Selector()
  static getOvenTypes(state: FormStateModel): OvenTypes[] {
    return state.ovenTypes;
  }

  @Selector()
  static getSelectedOvenType(state: FormStateModel): string {
    return state.selectedOvenType;
  }

  @Selector()
  static getRecipes(state: FormStateModel): RecipeListItem[] {
    return state.recipes.filter(
      recipe => recipe.oven === state.selectedOvenType
    );
  }

  @Selector()
  static getSelectedRecipe(state: FormStateModel): number {
    return state.selectedRecipe;
  }

  @Action(GetOvenTypes)
  getOvenTypesAction(ctx: Ctx) {
    return this.formService
      .getOvenTypes()
      .pipe(tap(ovenTypes => ctx.patchState({ ovenTypes })));
  }

  @Action(SetOvenType)
  setOvenTypeAction(ctx: Ctx, selectOven: SetOvenType) {
    const selectedOvenType = selectOven.payload.ovenType;

    ctx.patchState({
      selectedOvenType,
    });
  }

  @Action(GetRecipes)
  getRecipesAction(ctx: Ctx) {
    return this.formService.getRecipes().pipe(
      tap(recipes =>
        ctx.patchState({
          recipes,
          selectedRecipe: this.matchingRecipeId({ ...ctx.getState(), recipes }),
        })
      )
    );
  }

  @Action(SetRecipe)
  setRecipeAction(ctx: Ctx, recipe: SetRecipe) {
    const selectedRecipe = recipe.payload.recipeId;
    ctx.patchState({
      selectedRecipe,
    });
  }

  protected matchingRecipeId({
    recipes,
    selectedOvenType,
  }: FormStateModel): number {
    return recipes.filter(recipe => recipe.oven === selectedOvenType)[0].id;
  }
}
