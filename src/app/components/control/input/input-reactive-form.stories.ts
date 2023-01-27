import { Component, Input } from '@angular/core';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ControlFieldComponent } from '../control-field/control-field.component';
import { InputDirective } from './input.directive';
import { InputAfterDirective } from '../input-after/input-after.directive';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IconModule } from '../../icon/icon.module';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-story-input',
  template: `
    <app-control-field>
      <label *ngIf="label" [for]="inputId">{{ label }}</label>
      <input
        [id]="inputId"
        appInput
        placeholder="{{ placeholder }}"
        [formControl]="control" />
      <app-error-message [control]="control"></app-error-message>
    </app-control-field>
  `,
})
class StoryInputReactiveComponent {
  @Input() label = 'Dough ball weight';
  @Input() placeholder: string | undefined;
  @Input() control = new FormControl();
  inputId = 'story-input';
}

const meta: Meta<StoryInputReactiveComponent> = {
  title: 'Control/Input-Reactive',
  component: StoryInputReactiveComponent,
  decorators: [
    moduleMetadata({
      imports: [
        InputDirective,
        InputAfterDirective,
        ReactiveFormsModule,
        FormsModule,
        IconModule,
      ],
      declarations: [ControlFieldComponent, ErrorMessageComponent],
    }),
  ],
};
export default meta;

type Story = StoryObj<StoryInputReactiveComponent>;

export const Template: Story = {};

export const Required: Story = {
  args: {
    control: new FormControl('', [Validators.required]),
  },
};
