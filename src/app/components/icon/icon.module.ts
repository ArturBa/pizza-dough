import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChevronComponent } from './chevron/chevron.component';

const exports = [ChevronComponent];

@NgModule({
  declarations: [...exports],
  imports: [CommonModule],
  exports,
})
export class IconModule {}
