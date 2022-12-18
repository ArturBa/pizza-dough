export class GetOvenTypes {
  static readonly type = '[Form] Get oven types';
}

export class SetOvenType {
  static readonly type = '[Form] Set oven type';

  constructor(public payload: { ovenType: string }) {}
}

export class GetAllRecipes {
  static readonly type = '[Form] Get all recipes';
}

export class GetRecipes {
  static readonly type = '[Form] Get recipes';
}
