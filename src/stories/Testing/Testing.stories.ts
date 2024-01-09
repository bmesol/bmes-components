import type { Meta, StoryObj } from "@storybook/react";
import Testing from "../../lib/components/Testing/Testing";

const meta: Meta<typeof Testing> = {
  title: "Testing/Toast Component",
  component: Testing,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Testing>;

export const Toast_Testing: Story = {};