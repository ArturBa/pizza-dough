import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { DoughState } from './redux/dough.state';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgxsModule.forFeature([DoughState])],
})
export class DoughModule {}
