import { PhoneIcon } from "../../lib/components/Icons/PhoneIcon/PhoneIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PhoneIcon> = {
  title: "Icons/Phone",
  component: PhoneIcon,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Phone: Story = {
  args: {},
};
