import { WeightUnitTypes } from './dough.model';

export class SetDoughWeight {
  static readonly type = '[Dough] Set weight';
  constructor(public payload: { weight: number }) {}
}

export class SetDoughCount {
  static readonly type = '[Dough] Set count';
  constructor(public payload: { count: number }) {}
}

export class SetWeightUnit {
  static readonly type = '[Dough] Set weight unit';
  constructor(public payload: { unit: WeightUnitTypes }) {}
}
