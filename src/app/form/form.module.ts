import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeSelectorComponent } from './recipe-selector/recipe-selector.component';
import { OvenSelectorComponent } from './oven-selector/oven-selector.component';

@NgModule({
  declarations: [RecipeSelectorComponent, OvenSelectorComponent],
  imports: [CommonModule],
})
export class FormModule {}
