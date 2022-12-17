import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDirective } from './input/input.directive';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputAfterDirective } from './input-after/input-after.directive';
import { SelectorDirective } from './selector/selector.directive';
import { SelectorButtonComponent } from './selector-button/selector-button.component';
import { IconModule } from '../icon/icon.module';

const exports = [
  InputDirective,
  FormFieldComponent,
  InputAfterDirective,
  SelectorDirective,
];
@NgModule({
  declarations: [...exports, SelectorButtonComponent],
  imports: [CommonModule, IconModule],
  exports,
})
export class FormModule {}
