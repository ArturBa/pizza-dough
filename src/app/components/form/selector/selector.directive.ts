import {
  ComponentRef,
  Directive,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { InputDirective } from '../input/input.directive';
import { SelectorButtonComponent } from '../selector-button/selector-button.component';

@Directive({
  selector: 'input[appSelector]',
  hostDirectives: [InputDirective],
})
export class SelectorDirective implements OnInit {
  protected chevronButton: ComponentRef<SelectorButtonComponent> | undefined;

  constructor(protected readonly viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.chevronButton = this.viewContainerRef.createComponent(
      SelectorButtonComponent
    );
  }
}
