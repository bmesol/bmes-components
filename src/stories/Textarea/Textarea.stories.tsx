import { Button, ButtonVariants } from "../../lib/components/Button/Button";
import { Textarea } from "../../lib/components/Textarea/Textarea";
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

export const Sample_Textarea: Story = {
  render: () => {
    const App = () => {
      const [value, setValue] = useState("");
      const handleTextareaChange = (currentValue: string) => {
        setValue(currentValue);
      };
      return (
        <>
          <Textarea
            label="Notes"
            length={1000}
            value={value}
            onChange={handleTextareaChange}
            placeholder="Enter value here"
          />
          <Button
            variant={ButtonVariants.PRIMARY}
            label="Submit"
            classNames="bg-dark text-bg-dark m-3"
            onClick={() => alert("Your Notes : " + value)}
          />
        </>
      );
    };
    return <App />;
  },
};
