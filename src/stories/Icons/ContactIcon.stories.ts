import { ContactsIcon } from "../../lib/components/Icons/ContactsIcon/ContactsIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ContactsIcon> = {
  title: "Icons/Contact",
  component: ContactsIcon,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Contact: Story = {
  args: {},
};
