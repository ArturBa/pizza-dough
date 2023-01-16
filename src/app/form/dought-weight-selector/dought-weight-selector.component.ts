import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dought-weight-selector',
  templateUrl: './dought-weight-selector.component.html',
  styleUrls: ['./dought-weight-selector.component.scss'],
})
export class DoughtWeightSelectorComponent {
  readonly control = new FormControl('');
}
