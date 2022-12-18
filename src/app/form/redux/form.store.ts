import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FormService } from './form.service';
import { GetOvenTypes, SetOvenType } from './form.actions';
import { tap } from 'rxjs';

export interface OvenTypes {
  key: string;
  value: string;
}

export interface FormStateModel {
  ovenTypes: OvenTypes[];
  selectedOvenType: string;
}

type Ctx = StateContext<FormStateModel>;

@State<FormStateModel>({
  name: 'formInfo',
  defaults: {
    ovenTypes: [],
    selectedOvenType: 'S',
  },
})
@Injectable()
export class FormState {
  constructor(protected readonly formService: FormService) {}

  @Selector()
  static getOvenTypes(state: FormStateModel) {
    return state.ovenTypes;
  }

  @Selector()
  static getSelectedOvenType(state: FormStateModel) {
    return state.selectedOvenType;
  }

  @Action(GetOvenTypes)
  getOvenTypesAction(ctx: Ctx) {
    return this.formService
      .getOvenTypes()
      .pipe(tap(ovenTypes => ctx.patchState({ ...ctx.getState(), ovenTypes })));
  }

  @Action(SetOvenType)
  setOvenType(ctx: Ctx, selectOven: SetOvenType) {
    ctx.patchState({
      ...ctx.getState(),
      selectedOvenType: selectOven.payload.ovenType,
    });
  }
}
