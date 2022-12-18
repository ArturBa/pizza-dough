import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeSelectorComponent } from './recipe-selector/recipe-selector.component';
import { OvenSelectorComponent } from './oven-selector/oven-selector.component';
import { ControlModule } from '../components/control/control.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [RecipeSelectorComponent, OvenSelectorComponent, FormComponent],
  imports: [CommonModule, ControlModule],
  exports: [FormComponent],
})
export class FormModule {}
