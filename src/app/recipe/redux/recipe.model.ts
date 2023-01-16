import { OvenTypes } from '../../form/redux/form.model';

interface RecipeIngredient {
  bakers: number;
  recommended: string;
}

interface RecipeIngredients {
  flour: RecipeIngredient;
  water: RecipeIngredient;
  yeast: RecipeIngredient;
  salt: RecipeIngredient;
  oil: RecipeIngredient;
  sugar: RecipeIngredient;
  other: RecipeIngredient;
}

export interface RecipeItem {
  id: number;
  title: string;
  oven: OvenTypes['key'];
  ingredients: RecipeIngredients;
  url: string;
  recipe: string;
}

export interface RecipeStateModel {
  selected: RecipeItem | null;
  recipes: Map<number, RecipeItem>;
}
