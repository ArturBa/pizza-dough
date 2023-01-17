import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { TableModule } from '../../components/table/table.module';

@NgModule({
  declarations: [IngredientsComponent],
  imports: [CommonModule, TableModule],
  exports: [IngredientsComponent],
})
export class IngredientsModule {}
