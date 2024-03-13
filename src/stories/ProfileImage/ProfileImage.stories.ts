import { ProfileImage } from "../../lib/components/ProfileImage/ProfileImage";
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

export const Profile_Image: Story = {
  args: {
    alt: "Tony stark",
  },
};
