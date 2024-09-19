import type { Meta, StoryObj } from "@storybook/react";
import { ShareLink, ModelProvider } from "../../lib";
import React from "react";

const meta: Meta<typeof ShareLink> = {
  title: "Components/ShareLink",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ShareLink>;

export const SampleShareLink: Story = {
  render: () => {
    const App = () => { return <ShareLink url="https://maps.app.goo.gl/qpZDsdWoBCKwPxkJ9" /> };
    return (
      <ModelProvider>
        <App />
      </ModelProvider>
    );
  },
};
