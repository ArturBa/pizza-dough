import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDirective } from './input/input.directive';
import { ControlFieldComponent } from './control-field/control-field.component';
import { InputAfterDirective } from './input-after/input-after.directive';
import { SelectorDirective } from './select/select.directive';
import { IconModule } from '../icon/icon.module';
import { ErrorMessageComponent } from './error-message/error-message.component';

const exportComponents = [ControlFieldComponent, ErrorMessageComponent];
@NgModule({
  declarations: [...exportComponents],
  imports: [
    CommonModule,
    IconModule,
    InputDirective,
    InputAfterDirective,
    SelectorDirective,
  ],
  exports: [
    ...exportComponents,
    InputDirective,
    InputAfterDirective,
    SelectorDirective,
  ],
})
export class ControlModule {}
