import type { Meta, StoryObj } from "@storybook/react";
import { TextBox } from "../../lib";

const meta: Meta<typeof TextBox> = {
  title: "Components/TextBox",
  component: TextBox,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof TextBox>;

export const SampleTextBox: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
  },
};