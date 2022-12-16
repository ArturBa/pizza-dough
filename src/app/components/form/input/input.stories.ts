import { Component, Input } from '@angular/core';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { FormFieldComponent } from '../form-field/form-field.component';
import { InputDirective } from './input.directive';
import { InputAfterDirective } from '../input-after/input-after.directive';

@Component({
  selector: 'app-story-input',
  template: `
    <app-form-field>
      <label *ngIf="label" [for]="inputId">{{ label }}</label>
      <input [id]="inputId" appInput placeholder="{{ placeholder }}" />
      <span *ngIf="inputAfter" appInputAfter>{{ inputAfter }}</span>
    </app-form-field>
  `,
})
class StoryInputComponent {
  @Input() label: string | undefined;
  @Input() inputAfter: string | undefined;
  @Input() placeholder: string | undefined;
  inputId = 'story-input';
}

const meta: Meta<StoryInputComponent> = {
  title: 'Form/Input',
  component: StoryInputComponent,
  decorators: [
    moduleMetadata({
      declarations: [FormFieldComponent, InputDirective, InputAfterDirective],
    }),
  ],
};
export default meta;

type Story = StoryObj<StoryInputComponent>;

export const Template: Story = {
  args: {
    label: 'Dough ball weight',
  },
};

export const NoLabel: Story = {
  args: {
    label: undefined,
  },
};

export const After: Story = {
  args: {
    ...Template.args,
    inputAfter: 'g',
  },
};

export const Placeholder: Story = {
  args: {
    ...Template.args,
    placeholder: '400',
  },
};
