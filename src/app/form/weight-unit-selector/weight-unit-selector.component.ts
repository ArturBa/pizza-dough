import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SetWeightUnit, WeightUnitTypes, weightUnits } from '../../dough/redux';
import { Subject, filter, takeUntil } from 'rxjs';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-weight-unit-selector',
  templateUrl: './weight-unit-selector.component.html',
  styleUrls: ['./weight-unit-selector.component.scss'],
})
export class WeightUnitSelectorComponent implements OnDestroy {
  readonly control = new FormControl<WeightUnitTypes>('g');
  protected readonly destroy$ = new Subject<void>();

  get weightArray() {
    const weightArray: { key: WeightUnitTypes; label: string }[] = [];
    weightUnits.forEach((value, key) => {
      weightArray.push({ ...value, key });
    });
    return weightArray;
  }

  constructor(protected readonly store: Store) {
    this.subscribeToControlChanged();
    this.control.setValue('g');
  }

  protected subscribeToControlChanged = () => {
    this.control.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        filter(value => value !== null)
      )
      .subscribe(_value => {
        const value = _value as WeightUnitTypes;
        console.log(
          '🚀 ~ file: weight-unit-selector.component.ts:36 ~ WeightUnitSelectorComponent ~ value',
          value
        );
        this.store.dispatch(new SetWeightUnit({ unit: value! }));
      });
  };

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
