import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeSelectorComponent } from './recipe-selector/recipe-selector.component';
import { OvenSelectorComponent } from './oven-selector/oven-selector.component';
import { ControlModule } from '../components/control/control.module';

@NgModule({
  declarations: [RecipeSelectorComponent, OvenSelectorComponent],
  imports: [CommonModule, ControlModule],
})
export class FormModule {}
