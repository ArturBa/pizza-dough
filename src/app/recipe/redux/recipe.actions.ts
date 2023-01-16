export class SetRecipeId {
  static readonly type = '[Recipe] Set recipe id';
  constructor(public payload: { recipeId: number }) {}
}
