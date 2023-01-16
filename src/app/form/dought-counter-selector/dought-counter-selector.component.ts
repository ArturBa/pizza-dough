import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dought-counter-selector',
  templateUrl: './dought-counter-selector.component.html',
  styleUrls: ['./dought-counter-selector.component.scss'],
})
export class DoughtCounterSelectorComponent {
  readonly control = new FormControl<number>(2, [
    Validators.min(1),
    Validators.pattern(/\d+/),
    Validators.required,
  ]);
}
