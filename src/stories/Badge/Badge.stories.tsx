import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../../lib";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SampleBadge: Story = {
  args: {
    label: "Badge",
  },
};
