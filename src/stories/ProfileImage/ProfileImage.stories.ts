import { ProfileImage, ProfileImageSizes } from "../../lib";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProfileImage> = {
  title: "Components/Profile Image",
  component: ProfileImage,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SampleProfile: Story = {
  args: {
    alt: "Tony stark",
    size: ProfileImageSizes.SM,
  },
};
