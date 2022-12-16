import { StoryObj, Meta, moduleMetadata } from '@storybook/angular';
import { HeaderLogoComponent } from '../header-logo/header-logo.component';
import { HeaderComponent } from './header.component';

export default {
  title: 'Components/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [HeaderComponent, HeaderLogoComponent],
    }),
  ],
} as Meta;

type Story = StoryObj<HeaderComponent>;
export const Template: Story = {};
