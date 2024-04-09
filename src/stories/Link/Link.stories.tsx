import { LinkVariants } from "../../lib/components/Link/DTOs";
import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../../lib/components/Link/Link";
import LinkDoc from "./LinkDoc.md";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: LinkDoc,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample_Link: Story = {
  args: {
    label: "Forget password?",
    variant: LinkVariants.DEFAULT,
  },
};
