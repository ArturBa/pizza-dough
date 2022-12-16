import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class FormFieldComponent {
  constructor(protected readonly viewContainerRef: ViewContainerRef) {}
}
