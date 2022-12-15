import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import { componentWrapperDecorator } from '@storybook/angular';
import type { Decorator } from '@storybook/angular';

setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#f8f8f8',
      },
      {
        name: 'dark',
        value: '#333333',
      },
    ],
  },
};

export const decorators: Decorator[] = [
  componentWrapperDecorator(
    story => `<div style="padding: 3rem">${story}</div>`
  ),
];
