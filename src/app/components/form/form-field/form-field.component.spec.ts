import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldComponent } from './form-field.component';

export type ElementFromFixture<T = HTMLElement> = T | null | undefined;

export function getElementFromFixture<T = HTMLElement>(
  fixture: ComponentFixture<unknown>,
  selector: string
): T | null | undefined {
  return fixture.nativeElement
    .querySelector('app-form-field')
    ?.shadowRoot?.querySelector(selector);
}

describe('FormFieldComponent', () => {
  let component: FormFieldComponent;
  let fixture: ComponentFixture<FormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
