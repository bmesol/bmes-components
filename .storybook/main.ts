import type { StorybookConfig } from "@storybook/react-webpack5";

// --- Configuration object for Storybook ---
const config: StorybookConfig = {
  // --- Patterns for finding stories and MDX files ---
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  // --- List of addons to include in Storybook ---
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
    "@storybook/addon-toolbars",
  ],

  // --- Framework configuration for Storybook ---
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  // ---Documentation settings ---
  docs: {
    autodocs: "tag",
  },
};
export default config;