import { Component, Input } from '@angular/core';
import { SelectorDirective } from './select.directive';
import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { ControlFieldComponent } from '../control-field/control-field.component';
import { IconModule } from '../../icon/icon.module';
import { InputDirective } from '../input/input.directive';
import { InputAfterDirective } from '../input-after/input-after.directive';

@Component({
  selector: 'app-story-select',
  template: `
    <app-control-field>
      <label *ngIf="label" [for]="inputId">{{ label }}</label>
      <select [id]="inputId" appSelect placeholder="{{ placeholder }}">
        <option *ngFor="let value of values" [value]="value">
          {{ value }}
        </option>
      </select>
    </app-control-field>
  `,
})
class StorySelectorComponent {
  @Input() label: string | undefined;
  @Input() inputAfter: string | undefined;
  @Input() placeholder: string | undefined;
  @Input() values: string[] = [];
  inputId = 'story-select';
}

const meta: Meta<StorySelectorComponent> = {
  title: 'Control/Select',
  component: StorySelectorComponent,
  decorators: [
    moduleMetadata({
      declarations: [ControlFieldComponent],
      imports: [
        InputDirective,
        InputAfterDirective,
        SelectorDirective,
        IconModule,
      ],
    }),
  ],
};
export default meta;

type Story = StoryObj<StorySelectorComponent>;

export const Template: Story = {
  args: {
    label: 'Select your fav pizza style',
    values: ['NY Style', 'Neapolitana', 'Chicago', 'Detroid'],
  },
};

export const NoLabel: Story = {
  args: {
    ...Template.args,
    label: undefined,
  },
};
