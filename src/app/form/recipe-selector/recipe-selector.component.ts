import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-selector',
  templateUrl: './recipe-selector.component.html',
  styleUrls: ['./recipe-selector.component.scss'],
})
export class RecipeSelectorComponent {
  ovenTypes = ['Modified Grill', 'Standard Home Oven', 'Wood Fired Oven'];
}
