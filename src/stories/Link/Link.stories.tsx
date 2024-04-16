import { Link, LinkTargetTypes, LinkVariants } from "../../lib";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SampleLink: Story = {
  args: {
    label: "Contact Us",
    variant: LinkVariants.PRIMARY,
    href: "https://www.bmesolutions.in/contact/",
    target: LinkTargetTypes.BLANK
  },
};
