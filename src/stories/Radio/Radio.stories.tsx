import { Button, ButtonVariants } from "../../lib/components/Button/Button";
import { Radio, Directions } from "../../lib/components/Radio/Radio";
import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Sample_Radio: Story = {
  render: () => {
    const App = () => {
      const [gender, setGender] = useState("Male");
      const genderRadioList = [ { label: "Male", value: "Male" }, { label: "Female", value: "Female" } ];
      return (
        <>
          <div className="d-flex mt-4">
            <Radio
              label="Select Gender"
              items={genderRadioList}
              direction={Directions.HORIZONTAL}
              selectedValue="Male"
              onValueChange={setGender}
            />
          </div>

          <Button
            label="Show Gender"
            variant={ButtonVariants.OUTLINE_SECONDARY}
            onClick={() => {
              alert("You selected " + gender + " as your Gender");
            }}
            classNames="mt-4 mb-4"
          />
        </>
      );
    };
    return <App />;
  },
};
