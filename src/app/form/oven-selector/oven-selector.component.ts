import { Component } from '@angular/core';

@Component({
  selector: 'app-oven-selector',
  templateUrl: './oven-selector.component.html',
  styleUrls: ['./oven-selector.component.scss'],
})
export class OvenSelectorComponent {
  ovenTypes = ['Modified Grill', 'Standard Home Oven', 'Wood Fired Oven'];
}
