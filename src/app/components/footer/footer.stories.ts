import { Story, Meta } from '@storybook/angular';
import { FooterComponent } from './footer.component';

export default {
  title: 'Components/Footer',
  component: FooterComponent,
} as Meta;

const Template: Story<FooterComponent> = (args: FooterComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
