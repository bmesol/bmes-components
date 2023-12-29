import type { Meta, StoryObj } from "@storybook/react";
import { Pin } from "../../lib/components/Pin/Pin";
import PinDoc from "./PinDoc.md";

const meta: Meta<typeof Pin> = {
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
};

export default meta;

type Story = StoryObj<typeof Pin>;

export const Pins: Story = {
  args: {
    label: "Pin",
    length: 4,
  },
};