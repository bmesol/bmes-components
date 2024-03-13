import { MenuIcon } from "../../lib/components/Icons/MenuIcon/MenuIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MenuIcon> = {
  title: "Icons/Menu",
  component: MenuIcon,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Menu: Story = {
  args: {},
};
