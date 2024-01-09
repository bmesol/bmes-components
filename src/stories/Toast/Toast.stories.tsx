import type { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastVariants } from "../../lib/components/Toast/Toast";
import ToastDoc from "./ToastDoc.md";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  tags: ["autodocs"],
  component: Toast,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ToastDoc,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Toast_Sample: Story = {
  args: {
    variant: ToastVariants.DEFAULT,
    heading: "Heading text",
    message: "Message text here",
    showToast: true,
    onClose: () => {},
  },
};