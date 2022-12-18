import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectorDirective } from './select.directive';
import { ControlFieldComponent } from '../control-field/control-field.component';
import {
  ElementFromFixture,
  getElementFromFixture,
} from '../control-field/control-field.component.spec';
import { InputDirective } from '../input/input.directive';

@Component({
  selector: 'app-test-selector',
  template: `
    <app-control-field>
      <select appSelect>
        <option *ngFor="let value of values" [value]="value">
          {{ value }}
        </option>
      </select>
    </app-control-field>
  `,
})
class TestSelectorComponent {
  values = ['One'];
}
describe('SelectorDirective', () => {
  let component: TestSelectorComponent;
  let fixture: ComponentFixture<TestSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestSelectorComponent, ControlFieldComponent],
      imports: [InputDirective, SelectorDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(TestSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('select component', () => {
    let compiled: ElementFromFixture<HTMLSelectElement>;

    beforeEach(async () => {
      compiled = getElementFromFixture(fixture, 'select');
    });

    it('should create the selector', () => {
      expect(compiled).toBeTruthy();
    });

    it('should have a selector directive class', () => {
      const classes = compiled?.classList;
      expect(classes).toContain('app-select');
    });

    it('should have a input directive class', () => {
      const classes = compiled?.classList;
      expect(classes).toContain('app-input');
    });
  });

  describe('chevron component', () => {
    let compiled: ElementFromFixture;

    beforeEach(async () => {
      compiled = getElementFromFixture(fixture, 'app-chevron');
    });

    it('should create the selector', () => {
      expect(compiled).toBeTruthy();
    });
  });
});
