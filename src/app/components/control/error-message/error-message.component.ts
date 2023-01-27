import {
  AfterViewInit,
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
} from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent
  implements AfterViewInit, OnDestroy, OnChanges
{
  @Input() control: FormControl | undefined;
  @HostBinding('class.visible') visibleClass = true;
  error: ValidationErrors | undefined;
  errorKey: string | undefined;

  protected readonly destroy$ = new Subject<void>();

  constructor() {
    this.onValueUpdate();
  }

  ngOnChanges(): void {
    this.onValueUpdate();
  }

  ngAfterViewInit(): void {
    this.control?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(this.onValueUpdate.bind(this));
    this.control?.statusChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(this.onValueUpdate.bind(this));
  }

  protected onValueUpdate(): void {
    this.setUpDisplayMode();
    this.setUpErrorKey();
  }

  protected setUpDisplayMode(): void {
    this.visibleClass = this.control?.invalid ?? true;
  }

  protected setUpErrorKey(): void {
    const error = this.getError();
    this.errorKey = error ? Object.keys(error)[0] : undefined;
    this.error = this.errorKey ? error![this.errorKey] : undefined;
  }

  protected getError(): ValidationErrors | null | undefined {
    return this.control?.errors;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
