import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appInputAfter]',
  standalone: true,
})
export class InputAfterDirective {
  @HostBinding('class.app-input-after') class = true;
}
