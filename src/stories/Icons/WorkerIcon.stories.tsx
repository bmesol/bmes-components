import { WorkerIcon } from "../../lib/components/Icons/WorkerIcon/WorkersIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof WorkerIcon> = {
  title: "Icons/Worker",
  component: WorkerIcon,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Worker: Story = {
  args: {},
};
