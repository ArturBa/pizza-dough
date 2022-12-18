import { Component, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetOvenTypes, SetOvenType } from '../redux/form.actions';
import { FormState } from '../redux/form.store';
import { Observable, Subject, filter, takeUntil } from 'rxjs';
import { FormControl } from '@angular/forms';
import { OvenTypes } from '../redux/form.model';

@Component({
  selector: 'app-oven-selector',
  templateUrl: './oven-selector.component.html',
  styleUrls: ['./oven-selector.component.scss'],
})
export class OvenSelectorComponent implements OnDestroy {
  @Select(FormState.getOvenTypes) ovenTypes$:
    | Observable<OvenTypes[]>
    | undefined;

  @Select(FormState.getSelectedOvenType) selectedOvenType$:
    | Observable<string>
    | undefined;

  control = new FormControl('');

  protected readonly destroy$ = new Subject<boolean>();

  constructor(protected readonly store: Store) {
    store.dispatch(new GetOvenTypes());
    this.subscribeToControlChanged();
    this.subscribeToStoreChanged();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  protected subscribeToControlChanged = () => {
    this.control.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        filter(
          newValue =>
            newValue !==
            this.store.selectSnapshot(FormState.getSelectedOvenType)
        ),
        filter(value => value !== null)
      )
      .subscribe(value => {
        if (value == null) {
          return;
        }
        this.store.dispatch(new SetOvenType({ ovenType: value }));
      });
  };

  protected subscribeToStoreChanged = () => {
    this.selectedOvenType$
      ?.pipe(
        takeUntil(this.destroy$),
        filter(newValue => newValue !== this.control.value)
      )
      .subscribe(newValue => this.control.setValue(newValue));
  };
}
