import { Checkbox, Directions, Button, ButtonVariants, ToastProvider, useToast } from "../../lib";
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

export const SampleCheckbox: Story = {
  render: () => {
    const App = () => {
      const toast = useToast();
      const [selectedValue, setSelectedValue] = useState<string[]>([]);
      const statementList = [ { label: "Agree to the Terms and Conditions", value: "Agree" } ];

      const handleCheckedChange = (currentSelectedValues: string[]) => {
        setSelectedValue(currentSelectedValues);
      };

      const handleSubmitButton = () => {
        const isAgree = selectedValue.includes("Agree");
        if (isAgree) {
          toast.success("Successfully submitted");
        } else {
          toast.error("Agree to the Terms and Conditions");
        }
      };
      return (
        <>
          <div className="my-4">
            <Checkbox items={statementList} direction={Directions.VERTICAL} onCheckedChange={handleCheckedChange} />
            <div className="text-center">
              <Button label="Submit" variant={ButtonVariants.PRIMARY} onClick={handleSubmitButton} classNames="mt-4" />
            </div>
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
