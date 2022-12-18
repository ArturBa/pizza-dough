import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { ControlModule } from './control/control.module';

const exports = [FooterComponent, HeaderComponent];

@NgModule({
  declarations: [...exports, HeaderLogoComponent],
  imports: [CommonModule, ControlModule],
  exports,
})
export class ComponentsModule {}
