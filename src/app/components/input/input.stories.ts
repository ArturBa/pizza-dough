import { Story, Meta } from '@storybook/angular';
import { InputComponent } from './input.component';

export default {
  title: 'Components/Input',
  component: InputComponent,
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Your favorite city',
};

export const UnitLabel = Template.bind({});
UnitLabel.args = {
  label: 'Your favorite city',
  unitLabel: 'g',
};

export const NoLabel = Template.bind({});
NoLabel.args = {};

export const Small = Template.bind({});
Small.args = {
  // size: 'small',
  label: 'Your favorite city',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Vienna',
  label: 'Your favorite city',
};
