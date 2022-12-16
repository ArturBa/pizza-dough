import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'input[appInput]',
})
export class InputDirective {
  @HostBinding('class.app-input') class = true;
  // constructor() {}
}
