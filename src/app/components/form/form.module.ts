import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDirective } from './input/input.directive';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputAfterDirective } from './input-after/input-after.directive';
import { SelectorDirective } from './selector/selector.directive';
import { IconModule } from '../icon/icon.module';

const exports = [FormFieldComponent];
@NgModule({
  declarations: [...exports],
  imports: [
    CommonModule,
    IconModule,
    InputDirective,
    InputAfterDirective,
    SelectorDirective,
  ],
  exports,
})
export class FormModule {}
