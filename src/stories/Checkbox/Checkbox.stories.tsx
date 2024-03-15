import { Button, ButtonVariants, ToastProvider, useToast } from "../../lib";
import { Checkbox } from "../../lib/components/Checkbox/Checkbox";
import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Sample_Checkbox: Story = {
  render: () => {
    const App = () => {
      const toast = useToast();
      const [isAgreed, setIsAgreed] = useState(false);

      const handleSubmitButton = () => {
        if (isAgreed) {
          toast.success("Successfully submitted...!");
        } else {
          toast.error("Accept the Terms and Conditions");
        }
      };

      return (
        <>
          <div className="my-4">
            <Checkbox
              id="1"
              label="Agree to the Terms and Conditions"
              onCheckedChange={setIsAgreed}
            />
            <Button
              label="Submit"
              variant={ButtonVariants.PRIMARY}
              onClick={handleSubmitButton}
              classNames="mt-4"
            />
          </div>
        </>
      );
    };
    return (
      <ToastProvider>
        <App />
      </ToastProvider>
    );
  },
};
