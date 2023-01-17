import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeSelectorComponent } from './recipe-selector/recipe-selector.component';
import { OvenSelectorComponent } from './oven-selector/oven-selector.component';
import { ControlModule } from '../components/control/control.module';
import { FormComponent } from './form/form.component';
import { NgxsModule } from '@ngxs/store';
import { FormState } from './redux/form.state';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { WeightUnitSelectorComponent } from './weight-unit-selector/weight-unit-selector.component';
import { DoughCounterSelectorComponent } from './dough-counter-selector/dough-counter-selector.component';
import { DoughWeightSelectorComponent } from './dough-weight-selector/dough-weight-selector.component';
import { DoughModule } from '../dough/dough.module';

@NgModule({
  declarations: [
    RecipeSelectorComponent,
    OvenSelectorComponent,
    FormComponent,
    WeightUnitSelectorComponent,
    DoughCounterSelectorComponent,
    DoughWeightSelectorComponent,
  ],
  imports: [
    CommonModule,
    ControlModule,
    NgxsModule.forFeature([FormState]),
    HttpClientModule,
    ReactiveFormsModule,
    DoughModule,
  ],
  exports: [FormComponent],
})
export class FormModule {}
