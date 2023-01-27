import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChevronComponent } from './chevron/chevron.component';
import { ErrorComponent } from './error/error.component';

const exports = [ChevronComponent, ErrorComponent];

@NgModule({
  declarations: [...exports],
  imports: [CommonModule],
  exports,
})
export class IconModule {}
