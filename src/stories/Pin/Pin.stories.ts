import type { Meta, StoryObj } from "@storybook/react";
import { Pin } from "../../lib/components/Pin/Pin";
import PinDoc from "./PinDoc.md";

const meta = {
  title: "Components/Pin",
  tags: ["autodocs"],
  component: Pin,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: PinDoc,
      },
    },
  },
} satisfies Meta<typeof Pin>;

export default meta;

type Story = StoryObj<typeof Pin>;

export const Pins: Story = {
  args: {
    label: "Pin",
    length: 4,
  },
};