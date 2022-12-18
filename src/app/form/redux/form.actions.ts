export class GetOvenTypes {
  static readonly type = '[Form] Get oven types';
}

export class SetOvenType {
  static readonly type = '[Form] Set oven type';
  constructor(public payload: { ovenType: string }) {}
}

export class GetRecipes {
  static readonly type = '[Form] Get recipes';
}

export class SetRecipe {
  static readonly type = '[Form] Set recipe id';
  constructor(public payload: { recipeId: number }) {}
}
