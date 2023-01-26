import {
  Component,
  ElementRef,
  Input,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { RowDataInterface } from '../row/row.component';
import { DoughStateModelDefaults, WeightUnitTypes } from '../../../dough/redux';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TableComponent {
  @Input() data!: RowDataInterface[];
  @Input() caption: string | undefined;
  @Input() unit: WeightUnitTypes = DoughStateModelDefaults.unit;

  @Input() captionTemplate: TemplateRef<ElementRef> | undefined;

  get totalWeight(): number {
    return (
      this.data
        .map(d => d.weight)
        .filter(d => !!d)
        .reduce((a, b) => {
          return a! + b!;
        }, 0) ?? 0
    );
  }
}
