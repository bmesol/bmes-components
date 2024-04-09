import { TickIcon } from "../../lib/components/Icons/TickIcon/TickIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TickIcon> = {
  title: "Icons/Tick",
  component: TickIcon,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Tick: Story = {
  args: {},
};
