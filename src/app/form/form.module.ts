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

@NgModule({
  declarations: [RecipeSelectorComponent, OvenSelectorComponent, FormComponent],
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
