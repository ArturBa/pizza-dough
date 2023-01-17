import { Action, Selector, State, StateContext } from '@ngxs/store';
import { DoughStateModel, WeightUnitTypes } from './dough.model';
import { Injectable } from '@angular/core';
import { SetDoughCount, SetDoughWeight, SetWeightUnit } from './dough.actions';

type Ctx = StateContext<DoughStateModel>;

@State<DoughStateModel>({
  name: 'doughInfo',
  defaults: {
    weight: 250,
    count: 2,
    unit: undefined,
  },
})
@Injectable()
export class DoughState {
  @Selector()
  static doughWeight$(state: DoughStateModel): number {
    return state.weight;
  }

  @Selector()
  static weightUnit$(state: DoughStateModel): WeightUnitTypes | undefined {
    return state.unit;
  }

  @Action(SetDoughCount)
  setDoughCount(ctx: Ctx, setDoughCount: SetDoughCount) {
    const count = setDoughCount.payload.count;
    ctx.patchState({ count });
  }

  @Action(SetDoughWeight)
  setDoughWeight(ctx: Ctx, setDoughWeight: SetDoughWeight) {
    const weight = setDoughWeight.payload.weight;
    ctx.patchState({ weight });
  }

  @Action(SetWeightUnit)
  setWeightUnit(ctx: Ctx, setWeightUnit: SetWeightUnit) {
    const unit = setWeightUnit.payload.unit;
    ctx.patchState({ unit });
  }
}
