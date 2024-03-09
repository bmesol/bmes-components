import { UsersIcon } from "../../lib/components/Icons/UsersIcon/UsersIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof UsersIcon> = {
  title: "Icons/Users",
  component: UsersIcon,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Users: Story = {
  args: {},
};
