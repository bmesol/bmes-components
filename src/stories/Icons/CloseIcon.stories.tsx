import { CloseIcon } from "../../lib/components/Icons/CloseIcon/CloseIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CloseIcon> = {
  title: "Icons/Close",
  component: CloseIcon,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Close: Story = {
  args: {},
};
