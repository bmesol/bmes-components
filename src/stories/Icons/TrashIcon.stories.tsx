import { TrashIcon } from "../../lib/components/Icons/TrashIcon/TrashIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TrashIcon> = {
  title: "Icons/Trash",
  component: TrashIcon,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Trash: Story = {
  args: {},
};
