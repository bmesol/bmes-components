import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { TextBox } from "../../lib";

const meta: Meta<typeof TextBox> = {
  title: "Components/TextBox",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof TextBox>;

export const SampleTextBox: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <TextBox
        label="Name"
        value={value}
        onChange={(inputValue: string) => setValue(inputValue)}
        placeholder="Enter name"
      />
    );
  },
};
