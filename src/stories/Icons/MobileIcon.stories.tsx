import { MobileIcon } from "../../lib/components/Icons/MobileIcon/MobileIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MobileIcon> = {
  title: "Icons/Mobile",
  component: MobileIcon,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Mobile: Story = {
  args: {},
};
