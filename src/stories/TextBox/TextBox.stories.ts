import type { Meta, StoryObj } from "@storybook/react";
import { TextBox } from "../../lib/components/TextBox/TextBox";
import TextBoxDoc from "./TextBoxDoc.md";

const meta = {
  title: "Components/TextBox",
  tags: ["autodocs"],
  component: TextBox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: TextBoxDoc,
      },
    },
  },
} satisfies Meta<typeof TextBox>;

export default meta;

type Story = StoryObj<typeof TextBox>;

export const Text: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
  },
};