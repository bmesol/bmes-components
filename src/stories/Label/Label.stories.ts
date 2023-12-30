import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../../lib/components/Label/Label";
import { LabelVariants } from "../../lib/components/Label/DTOs";
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

/* --- Stories for Text Variants --- */

export const Text_Default: Story = {
  args: {
    label: "Not have an account?",
    type: "text",
    variant: LabelVariants.DEFAULT,
  },
};

/* --- Stories for Link Variants --- */

export const Link_Default: Story = {
  args: {
    label: "Forget password?",
    type: "link",
    variant: LabelVariants.DEFAULT,
  },
};