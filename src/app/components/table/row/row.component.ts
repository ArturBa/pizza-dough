import { Component, Input } from '@angular/core';

export interface RowDataInterface {
  title: string;
  weight?: number;
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
}
