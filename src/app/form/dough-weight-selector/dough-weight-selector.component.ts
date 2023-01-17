import { Component, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject, filter, takeUntil } from 'rxjs';
import { DoughState, SetDoughWeight, WeightUnitTypes } from '../../dough/redux';

@Component({
  selector: 'app-dough-weight-selector',
  templateUrl: './dough-weight-selector.component.html',
  styleUrls: ['./dough-weight-selector.component.scss'],
})
export class DoughWeightSelectorComponent implements OnDestroy {
  protected readonly destroy$ = new Subject<void>();

  @Select(DoughState.weightUnit$) readonly weightUnit$:
    | Observable<WeightUnitTypes>
    | undefined;

  readonly control = new FormControl<number>(250, [
    Validators.min(10),
    Validators.pattern(/\d+/),
    Validators.required,
  ]);

  constructor(protected readonly store: Store) {
    this.subscribeToControlChanged();
  }

  protected subscribeToControlChanged = () => {
    this.control.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        filter(value => value !== null)
      )
      .subscribe(value => {
        this.store.dispatch(new SetDoughWeight({ weight: value! }));
      });
  };

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
