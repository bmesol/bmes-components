import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../lib/components/Button/Button";
import { ButtonVariants } from "../../lib/components/Button/DTOs";
import ButtonDoc from "./ButtonDoc.md";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  tags: ["autodocs"],
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ButtonDoc,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/* --- Stories for Regular Button Variants --- */

export const Regular_Variant: Story = {
  args: {
    label: "Regular",
    variant: ButtonVariants.PRIMARY,
    onClick: () => {
      alert("You clicked on Regular Variant Button");
    },
    isDisabled: false,
  },
};

/* --- Stories for Outline Button Variants --- */

export const Outline_Variant: Story = {
  args: {
    label: "Outline",
    variant: ButtonVariants.OUTLINE_PRIMARY,
    onClick: () => {
      alert("You clicked on Outline Variant Button");
    },
    isDisabled: false,
  },
};