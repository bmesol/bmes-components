import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonVariants } from "../../lib";
import { SearchIcon } from "lucide-react";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/* --- Stories for Regular Button Variants --- */

export const RegularVariant: Story = {
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

export const OutlineVariant: Story = {
  args: {
    label: "Outline",
    variant: ButtonVariants.OUTLINE_SECONDARY,
    onClick: () => {
      alert("You clicked on Outline Variant Button");
    },
    isDisabled: false,
  },
};

/* --- Stories for Regular Button with Icon Variants --- */

export const RegularVariantWithIcon: Story = {
  args: {
    icon: <SearchIcon />,
    label: "Search",
    variant: ButtonVariants.PRIMARY,
    onClick: () => {
      alert("You clicked on Regular Variant with Icon Button");
    },
    isDisabled: false,
  },
};

/* --- Stories for Outline Button with Icon Variants --- */

export const OutlineVariantWithIcon: Story = {
  args: {
    icon: <SearchIcon />,
    label: "Search",
    variant: ButtonVariants.OUTLINE_SECONDARY,
    onClick: () => {
      alert("You clicked on Outline Variant with Icon Button");
    },
    isDisabled: false,
  },
};
