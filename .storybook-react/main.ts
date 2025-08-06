import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../react/**/*.stories.@(tsx|jsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    '@storybook/addon-docs'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};

export default config;
