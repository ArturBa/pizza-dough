import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  DoughStateModel,
  DoughStateModelDefaults,
  WeightUnitTypes,
  weightUnits,
} from './dough.model';
import { Injectable } from '@angular/core';
import { SetDoughCount, SetDoughWeight, SetWeightUnit } from './dough.actions';

type Ctx = StateContext<DoughStateModel>;

@State<DoughStateModel>({
  name: 'doughInfo',
  defaults: DoughStateModelDefaults,
})
@Injectable()
export class DoughState {
  @Selector()
  static doughWeight$(state: DoughStateModel): number {
    return state.weight;
  }

  @Selector()
  static doughCount$(state: DoughStateModel): number {
    return state.count;
  }

  @Selector()
  static weightUnit$(state: DoughStateModel): WeightUnitTypes {
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
    const { unit, weight } = ctx.getState();
    const newUnit = setWeightUnit.payload.unit;
    const newWeight =
      (weight / (weightUnits.get(unit ?? 'g')?.inGrams ?? 1)) *
      (weightUnits.get(newUnit)?.inGrams ?? 1);
    ctx.patchState({ unit: newUnit, weight: newWeight });
  }
}
