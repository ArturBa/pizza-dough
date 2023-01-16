import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-weight-unit-selector',
  templateUrl: './weight-unit-selector.component.html',
  styleUrls: ['./weight-unit-selector.component.scss'],
})
export class WeightUnitSelectorComponent {
  readonly control = new FormControl('g');

  weightMap = [
    { label: 'grams', key: 'g' },
    {
      label: 'ounces',
      key: 'oz',
    },
  ];
}
