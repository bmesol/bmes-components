import { ClientsIcon } from "../../lib/components/Icons/ClientsIcon/ClientsIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ClientsIcon> = {
  title: "Icons/Client",
  component: ClientsIcon,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Client: Story = {
  args: {},
};
