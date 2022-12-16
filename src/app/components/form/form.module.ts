import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDirective } from './input/input.directive';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputAfterDirective } from './input-after/input-after.directive';

@NgModule({
  declarations: [InputDirective, FormFieldComponent, InputAfterDirective],
  imports: [CommonModule],
})
export class FormModule {}
