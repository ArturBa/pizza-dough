import { Component, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Subject, filter, takeUntil } from 'rxjs';
import { DoughStateModelDefaults, SetDoughCount } from '../../dough/redux';

@Component({
  selector: 'app-dough-counter-selector',
  templateUrl: './dough-counter-selector.component.html',
  styleUrls: ['./dough-counter-selector.component.scss'],
})
export class DoughCounterSelectorComponent implements OnDestroy {
  protected readonly destroy$ = new Subject<void>();

  readonly control = new FormControl<number>(DoughStateModelDefaults.count, [
    Validators.min(1),
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
        this.store.dispatch(new SetDoughCount({ count: value! }));
      });
  };

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
