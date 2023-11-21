import { TextBox, TextBoxVariants } from "../../lib/components/TextBox/TextBox";
import TextBoxDoc from "./TextBoxDoc.md";
import type { Meta, StoryObj } from "@storybook/react";

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
    label: "Enter your name",
    type: TextBoxVariants.TEXT,
  },
};

export const Number: Story = {
  args: {
    label: "Enter your phone number",
    type: TextBoxVariants.NUMBER,
  },
};
export const Email: Story = {
  args: {
    label: "Enter your email",
    type: TextBoxVariants.EMAIL,
  },
};
export const Password: Story = {
  args: {
    label: "Enter your pin",
    type: TextBoxVariants.PIN,
  },
};