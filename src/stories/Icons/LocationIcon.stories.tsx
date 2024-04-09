import { LocationIcon } from "../../lib/components/Icons/LocationIcon/LocationIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LocationIcon> = {
  title: "Icons/Location",
  component: LocationIcon,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Location: Story = {
  args: {},
};
