import { EditIcon } from "../../lib/components/Icons/EditIcon/EditIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof EditIcon> = {
  title: "Icons/Edit",
  component: EditIcon,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Edit: Story = {
  args: {},
};
