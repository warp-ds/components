import type { StorybookConfig } from "@storybook/react-vite";
import Unocss from "unocss/vite";
import { presetWarp } from "@warp-ds/uno";

const config: StorybookConfig = {
  stories: ["../react/**/*.stories.@(tsx|jsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.plugins = config.plugins || [];

    config.plugins.push(
      Unocss({
        presets: [presetWarp()],
      })
    );

    return config;
  },
};

export default config;
