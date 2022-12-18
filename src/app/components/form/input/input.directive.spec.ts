import { Component } from '@angular/core';
import { InputDirective } from './input.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormFieldComponent } from '../form-field/form-field.component';
import {
  ElementFromFixture,
  getElementFromFixture,
} from '../form-field/form-field.component.spec';

@Component({
  selector: 'app-test-input',
  template: `
    <app-form-field>
      <input appInput />
    </app-form-field>
  `,
})
class TestInputComponent {}

describe('InputDirective', () => {
  let component: TestInputComponent;
  let fixture: ComponentFixture<TestInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestInputComponent, FormFieldComponent],
      imports: [InputDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(TestInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('input component', () => {
    let compiled: ElementFromFixture<HTMLInputElement>;

    beforeEach(async () => {
      compiled = getElementFromFixture(fixture, 'input');
    });

    it('should exists', () => {
      expect(compiled).toBeTruthy();
    });

    it('should have a input directive class', () => {
      const classed = compiled?.classList;
      expect(classed).toContain('app-input');
    });
  });
});
