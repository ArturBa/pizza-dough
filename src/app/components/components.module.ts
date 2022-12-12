import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

const exports = [FooterComponent];

@NgModule({
  declarations: [...exports],
  imports: [CommonModule],
  exports,
})
export class ComponentsModule {}
