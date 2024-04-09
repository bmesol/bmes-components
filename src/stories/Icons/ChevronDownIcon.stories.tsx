import { ChevronDownIcon } from "../../lib/components/Icons/ChevronDownIcon/ChevronDownIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ChevronDownIcon> = {
  title: "Icons/ChevronDown",
  component: ChevronDownIcon,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ChevronDown: Story = {
  args: {},
};
