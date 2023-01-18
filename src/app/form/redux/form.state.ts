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
import {
  FormStateModel,
  OvenTypes,
  RecipeListItem,
  defaultFormStateModel,
} from './form.model';
import { PathFormService } from '../service/path.service';

type Ctx = StateContext<FormStateModel>;

const defaultOvenType = 'S';

@State<FormStateModel>({
  name: 'formInfo',
  defaults: defaultFormStateModel,
})
@Injectable()
export class FormState {
  constructor(
    protected readonly formService: FormService,
    protected readonly path: PathFormService
  ) {}

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
    return this.formService.getOvenTypes().pipe(
      tap(ovenTypes =>
        ctx.patchState({
          ovenTypes,
          selectedOvenType: this.matchingOven(ctx.getState()),
        })
      )
    );
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
          selectedOvenType: this.matchingOven({ ...ctx.getState(), recipes }),
        })
      )
    );
  }

  @Action(SetRecipe)
  setRecipeAction(ctx: Ctx, recipe: SetRecipe) {
    const selectedRecipe = recipe.payload.recipeId;
    ctx.patchState({
      selectedRecipe,
      selectedOvenType: this.matchingOven({
        ...ctx.getState(),
        selectedRecipe,
      }),
    });
  }

  protected matchingRecipeId({
    recipes,
    selectedOvenType,
    selectedRecipe,
  }: FormStateModel): number {
    return (
      selectedRecipe ??
      recipes.filter(recipe => recipe.oven === selectedOvenType)[0].id
    );
  }

  protected matchingOven({
    recipes,
    selectedRecipe,
  }: FormStateModel): OvenTypes['key'] {
    if (recipes.length == 0) {
      return defaultOvenType;
    }
    return recipes.filter(recipe => recipe.id == selectedRecipe)[0].oven;
  }
}
