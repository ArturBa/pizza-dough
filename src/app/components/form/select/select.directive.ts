import {
  ComponentRef,
  Directive,
  HostBinding,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { InputDirective } from '../input/input.directive';
import { ChevronComponent } from '../../icon/chevron/chevron.component';

@Directive({
  selector: 'select[appSelect]',
  hostDirectives: [InputDirective],
  standalone: true,
})
export class SelectorDirective implements OnInit {
  @HostBinding('class.app-select') class = true;

  protected chevronButton: ComponentRef<ChevronComponent> | undefined;

  constructor(protected readonly viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.chevronButton =
      this.viewContainerRef.createComponent(ChevronComponent);
  }
}
