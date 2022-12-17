import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'input[appInput]',
  standalone: true,
})
export class InputDirective {
  @HostBinding('class.app-input') class = true;
}
