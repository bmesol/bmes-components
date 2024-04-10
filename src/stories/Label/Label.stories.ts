import type { Meta, StoryObj } from "@storybook/react";
import { Label, LabelVariants } from "../../lib";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SampleLabel: Story = {
  args: {
    label: "Not have an account?",
    variant: LabelVariants.DEFAULT,
  },
};
