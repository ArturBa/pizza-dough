import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-weight-row',
  templateUrl: './total-weight-row.component.html',
  styleUrls: ['./total-weight-row.component.scss'],
})
export class TotalWeightRowComponent {
  @Input() totalWeight!: number;
}
