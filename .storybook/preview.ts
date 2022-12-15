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
};

export const decorators: Decorator[] = [
  componentWrapperDecorator(
    story =>
      `<div style="margin: 1em; padding: 3rem; background-color: white;">${story}</div>`
  ),
];
