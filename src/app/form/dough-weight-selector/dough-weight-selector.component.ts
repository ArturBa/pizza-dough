import { Component, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject, filter, map, takeUntil } from 'rxjs';
import {
  DoughState,
  DoughStateModelDefaults,
  SetDoughWeight,
  WeightUnit,
  WeightUnitTypes,
  weightUnits,
} from '../../dough/redux';

@Component({
  selector: 'app-dough-weight-selector',
  templateUrl: './dough-weight-selector.component.html',
  styleUrls: ['./dough-weight-selector.component.scss'],
})
export class DoughWeightSelectorComponent implements OnDestroy {
  protected readonly destroy$ = new Subject<void>();

  @Select(DoughState.weightUnit$)
  readonly weightUnit$!: Observable<WeightUnitTypes>;

  @Select(DoughState.doughWeight$) protected readonly doughWeight$:
    | Observable<number>
    | undefined;

  readonly weightUnitData$: Observable<WeightUnit> = this.weightUnit$?.pipe(
    takeUntil(this.destroy$),
    map(unit => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return weightUnits.get(unit)!;
    })
  );

  readonly control = new FormControl<number>(DoughStateModelDefaults.weight, [
    Validators.min(10),
    Validators.pattern(/\d+/),
    Validators.required,
  ]);

  constructor(protected readonly store: Store) {
    this.subscribeToControlChanged();
    this.subscribeToValueChanged();
  }

  protected subscribeToControlChanged = () => {
    this.control.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        filter(value => value !== null)
      )
      .subscribe(value => {
        if (this.control.invalid) {
          return;
        }
        this.store.dispatch(new SetDoughWeight({ weight: value! }));
      });
  };

  protected subscribeToValueChanged = () => {
    this.doughWeight$?.pipe(takeUntil(this.destroy$)).subscribe(value => {
      this.control.setValue(value);
    });
  };

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
