import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFieldComponent } from './control-field.component';

export type ElementFromFixture<T = HTMLElement> = T | null | undefined;

export function getElementFromFixture<T = HTMLElement>(
  fixture: ComponentFixture<unknown>,
  selector: string
): T | null | undefined {
  return fixture.nativeElement
    .querySelector('app-control-field')
    ?.shadowRoot?.querySelector(selector);
}

describe('ControlFieldComponent', () => {
  let component: ControlFieldComponent;
  let fixture: ComponentFixture<ControlFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControlFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
