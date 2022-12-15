import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { InputComponent } from './input/input.component';

const exports = [FooterComponent, HeaderComponent];

@NgModule({
  declarations: [...exports, HeaderLogoComponent, InputComponent],
  imports: [CommonModule],
  exports,
})
export class ComponentsModule {}
