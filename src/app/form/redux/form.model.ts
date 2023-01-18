export interface OvenTypes {
  key: string;
  value: string;
}

export interface RecipeListItem {
  id: number;
  title: string;
  oven: OvenTypes['key'];
}

export interface FormStateModel {
  ovenTypes: OvenTypes[];
  selectedOvenType: string;
  recipes: RecipeListItem[];
  selectedRecipe: number;
}

export const defaultFormStateModel: FormStateModel = {
  ovenTypes: [],
  selectedOvenType: 'S',
  recipes: [],
  selectedRecipe: 18,
};
