import { Component, Input } from '@angular/core';
import { tableHeaders$ } from '../header/header.component';

export interface RowDataInterface {
  title: string;
  weight?: number;
  bakers?: number;
  recommended?: string;
}

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
})
export class RowComponent {
  emptyValue = '-';

  @Input() rowData!: RowDataInterface;
  tableHeaders$ = tableHeaders$;
}
