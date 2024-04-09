import { SearchIcon } from "../../lib/components/Icons/SearchIcon/SearchIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SearchIcon> = {
  title: "Icons/Search",
  component: SearchIcon,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Search: Story = {
  args: {},
};
