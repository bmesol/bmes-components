
import type { Preview } from "@storybook/react";
import { useTheme } from "./useTheme";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.js';
import "./../src/styles/global.scss";

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

export const globalTypes = {
  theme: {
    name: "Toggle theme",
    description: "Global theme for components",
    defaultValue: "Default theme",
    toolbar: {
      icon: "circlehollow",
      items: ["Default theme", "Insite theme"],
      showName: true,
      dynamicTitle: true,
    },
  },
};

export const decorators = [useTheme];