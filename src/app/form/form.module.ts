import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeSelectorComponent } from './recipe-selector/recipe-selector.component';
import { OvenSelectorComponent } from './oven-selector/oven-selector.component';
import { ControlModule } from '../components/control/control.module';
import { FormComponent } from './form/form.component';
import { NgxsModule } from '@ngxs/store';
import { FormState } from './redux/form.store';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { WeightUnitSelectorComponent } from './weight-unit-selector/weight-unit-selector.component';
import { DoughtCounterSelectorComponent } from './dought-counter-selector/dought-counter-selector.component';
import { DoughtWeightSelectorComponent } from './dought-weight-selector/dought-weight-selector.component';

@NgModule({
  declarations: [
    RecipeSelectorComponent,
    OvenSelectorComponent,
    FormComponent,
    WeightUnitSelectorComponent,
    DoughtCounterSelectorComponent,
    DoughtWeightSelectorComponent,
  ],
  imports: [
    CommonModule,
    ControlModule,
    NgxsModule.forFeature([FormState]),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [FormComponent],
})
export class FormModule {}
