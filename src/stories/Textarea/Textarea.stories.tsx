import { Textarea, Button, ButtonVariants } from "../../lib";
import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const SampleTextarea: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div style={{ minWidth: "50vw" }}>
        <Textarea
          label="Notes"
          length={1000}
          value={value}
          onChange={(inputValue: string) => setValue(inputValue)}
          placeholder="Enter value here"
        />
        <Button
          variant={ButtonVariants.PRIMARY}
          label="Submit"
          classNames="m-3"
          onClick={() => alert("Your Notes : " + value)}
        />
      </div>
    );
  },
};
