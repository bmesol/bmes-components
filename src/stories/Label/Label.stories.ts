import { LabelVariants } from "../../lib/components/Label/DTOs";
import { Label } from "../../lib/components/Label/Label";
import type { Meta, StoryObj } from "@storybook/react";
import LabelDoc from "./LabelDoc.md";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: LabelDoc,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample_Label: Story = {
  args: {
    label: "Not have an account?",
    variant: LabelVariants.DEFAULT,
  },
};
