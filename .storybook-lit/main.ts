import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.[tj]sx'],
  addons: ['@storybook/addon-essentials', '@chromatic-com/storybook', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
};
export default config;
