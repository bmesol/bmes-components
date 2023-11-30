import type { Preview } from "@storybook/react";
import { useTheme } from "./useTheme";
import "bootstrap/dist/css/bootstrap.css";
import "./../src/styles/global.css";

// --- Preview configuration for Storybook ---
export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// --- Global types configuration for Storybook ---
export const globalTypes = {
  theme: {
    name: "Toggle theme",
    description: "Global theme for components",
    defaultValue: "Default theme",
    toolbar: {
      icon: "circlehollow", // Icon for the theme selector
      items: ["Default theme", "Insite theme"], // Options for the theme selector
      showName: true,
      dynamicTitle: true,
    },
  },
};

// --- Decorators configuration for Storybook ---
export const decorators = [useTheme]; // Decorator to apply the theme selected by useTheme