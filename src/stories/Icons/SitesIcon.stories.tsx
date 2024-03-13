import { SitesIcon } from "../../lib/components/Icons/SitesIcon/SitesIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SitesIcon> = {
  title: "Icons/Sites",
  component: SitesIcon,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Sites: Story = {
  args: {},
};
