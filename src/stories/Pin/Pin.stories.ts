import type { Meta, StoryObj } from "@storybook/react";
import { Pin } from "../../lib";

const meta: Meta<typeof Pin> = {
  title: "Components/Pin",
  component: Pin,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Pin>;

export const SamplePin: Story = {
  args: {
    label: "Pin",
    length: 4,
  },
};