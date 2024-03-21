import { InfoIcon } from "../../lib/components/Icons/InfoIcon/InfoIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InfoIcon> = {
  title: "Icons/Info",
  component: InfoIcon,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {},
};
