import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appInputAfter]',
})
export class InputAfterDirective {
  @HostBinding('class.app-input-after-class') class = true;
}
