import { Component } from '@angular/core';
import { InputAfterDirective } from '../input-after/input-after.directive';

@Component({
  selector: 'app-selector-button',
  templateUrl: './selector-button.component.html',
  styleUrls: ['./selector-button.component.scss'],
  hostDirectives: [InputAfterDirective],
})
export class SelectorButtonComponent {}
