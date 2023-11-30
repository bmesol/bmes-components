import type { Meta, StoryObj } from "@storybook/react";
import { TextBox } from "../../lib/components/TextBox/TextBox";
import TextBoxDoc from "./TextBoxDoc.md";

// --- Metadata for the Storybook story ---
const meta = {
  title: "Components/TextBox",
  tags: ["autodocs"],
  component: TextBox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: TextBoxDoc, // Description for the component from ButtonDoc.md
      },
    },
  },
} satisfies Meta<typeof TextBox>; // Metadata type definition

export default meta;

type Story = StoryObj<typeof TextBox>; // Typing for the Story

/* --- Stories for TextBox --- */

export const Text: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
  },
};