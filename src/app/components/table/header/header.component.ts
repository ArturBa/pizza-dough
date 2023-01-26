import { Component, Input } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { RowDataInterface } from '../row/row.component';

export interface TableHeaderInterface {
  key: keyof RowDataInterface;
  label: string;
}

const newMapHeader = (unit: string): Map<keyof RowDataInterface, string> =>
  new Map([
    ['title', ''],
    ['bakers', "Bakers' %"],
    ['weight', `Weight (${unit})`],
    ['recommended', 'Recommended'],
  ]);

const updateTableHeaders = (unit: string) => {
  tableHeaders$.next(newMapHeader(unit));
};

export const tableHeaders$: ReplaySubject<Map<keyof RowDataInterface, string>> =
  new ReplaySubject();

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  protected _unit = '';
  tableHeaderOrder: (keyof RowDataInterface)[] = [
    'title',
    'bakers',
    'weight',
    'recommended',
  ];

  @Input() set unit(value: string) {
    this._unit = value;
    updateTableHeaders(value);
  }

  tableHeaders$ = tableHeaders$;
}
