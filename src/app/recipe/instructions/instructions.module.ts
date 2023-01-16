import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructionsComponent } from './instructions/instructions.component';

@NgModule({
  declarations: [InstructionsComponent],
  imports: [CommonModule],
  exports: [InstructionsComponent],
})
export class InstructionsModule {}
