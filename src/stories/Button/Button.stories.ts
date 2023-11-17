import { Button, ButtonVariants } from "../../lib/components/Button/Button";
import ButtonDoc from "./ButtonDoc.md";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Primary",
    variant: ButtonVariants.PRIMARY,
    onClick: () => {
      alert("You clicked on Primary Button");
    },
    isDisabled: false,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    variant: ButtonVariants.SECONDARY,
    onClick: () => {
      alert("You clicked on Secondary Button");
    },
    isDisabled: false,
  },
};

export const Success: Story = {
  args: {
    label: "Success",
    variant: ButtonVariants.SUCCESS,
    onClick: () => {
      alert("You clicked on Success Button");
    },
    isDisabled: false,
  },
};

export const Warning: Story = {
  args: {
    label: "Warning",
    variant: ButtonVariants.WARNING,
    onClick: () => {
      alert("You clicked on Warning Button");
    },
    isDisabled: false,
  },
};

export const Danger: Story = {
  args: {
    label: "Danger",
    variant: ButtonVariants.DANGER,
    onClick: () => {
      alert("You clicked on Danger Button");
    },
    isDisabled: false,
  },
};

export const Outline_Primary: Story = {
  args: {
    label: "Out Primary",
    variant: ButtonVariants.OUTLINE_PRIMARY,
    onClick: () => {
      alert("You clicked on Outline Primary Button");
    },
    isDisabled: false,
  },
};

export const Outline_Secondary: Story = {
  args: {
    label: "Out Secondary",
    variant: ButtonVariants.OUTLINE_SECONDARY,
    onClick: () => {
      alert("You clicked on Outline Secondary Button");
    },
    isDisabled: false,
  },
};

export const Outline_Success: Story = {
  args: {
    label: "Out Success",
    variant: ButtonVariants.OUTLINE_SUCCESS,
    onClick: () => {
      alert("You clicked on Outline Success Button");
    },
    isDisabled: false,
  },
};

export const Outline_Warning: Story = {
  args: {
    label: "Out Warning",
    variant: ButtonVariants.OUTLINE_WARNING,
    onClick: () => {
      alert("You clicked on Outline Warning Button");
    },
    isDisabled: false,
  },
};

export const Outline_Danger: Story = {
  args: {
    label: "Out Danger",
    variant: ButtonVariants.OUTLINE_DANGER,
    onClick: () => {
      alert("You clicked on Outline Danger Button");
    },
    isDisabled: false,
  },
};