import { MailIcon } from "../../lib/components/Icons/MailIcon/MailIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MailIcon> = {
  title: "Icons/Mail",
  component: MailIcon,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Mail: Story = {
  args: {},
};
