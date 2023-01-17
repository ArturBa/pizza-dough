import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { RowComponent } from './row/row.component';
import { HeaderComponent } from './header/header.component';
import { TotalWeightRowComponent } from './total-weight-row/total-weight-row.component';

@NgModule({
  declarations: [
    TableComponent,
    RowComponent,
    HeaderComponent,
    TotalWeightRowComponent,
  ],
  imports: [CommonModule],
  exports: [TableComponent],
})
export class TableModule {}
