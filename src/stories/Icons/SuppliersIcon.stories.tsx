import { SuppliersIcon } from "../../lib/components/Icons/SuppliersIcon/SuppliersIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SuppliersIcon> = {
  title: "Icons/Suppliers",
  component: SuppliersIcon,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Suppliers: Story = {
  args: {},
};
