import type { Meta, StoryObj } from "@storybook/react";
import { Pin } from "../../lib/components/Pin/Pin";
import PinDoc from "./PinDoc.md";

// --- Metadata for the Storybook story ---
const meta = {
  title: "Components/Pin",
  tags: ["autodocs"],
  component: Pin,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: PinDoc, // Description for the component from ButtonDoc.md
      },
    },
  },
} satisfies Meta<typeof Pin>; // Metadata type definition

export default meta;

type Story = StoryObj<typeof Pin>; // Typing for the Story

/* --- Stories for Pin --- */

export const Text: Story = {
  args: {
    label: "Pin",
    length: 4,
    placeholder: "*",
  },
};