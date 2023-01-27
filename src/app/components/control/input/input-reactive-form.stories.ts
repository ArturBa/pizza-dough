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

export const Placeholder: Story = {
  args: {
    ...Template.args,
    placeholder: '400',
  },
};

export const LongLabel: Story = {
  args: {
    ...Template.args,
    label:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum neque egestas congue quisque egestas diam in. Risus viverra adipiscing at in tellus. Tristique senectus et netus et malesuada. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nec feugiat nisl pretium fusce. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Lacinia quis vel eros donec ac odio tempor. Luctus venenatis lectus magna fringilla urna porttitor. Quis commodo odio aenean sed adipiscing diam. Convallis tellus id interdum velit laoreet id. Augue mauris augue neque gravida. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Elementum eu facilisis sed odio morbi quis commodo odio. Auctor neque vitae tempus quam. Aliquam ultrices sagittis orci a scelerisque purus semper. Congue quisque egestas diam in.',
  },
};
