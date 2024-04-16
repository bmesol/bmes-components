import { Radio, Directions, Button, ButtonVariants } from "../../lib";
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

export const SampleRadio: Story = {
  render: () => {
    const [gender, setGender] = useState("Male");
    const genderRadioList = [ { label: "Male", value: "Male" }, { label: "Female", value: "Female" } ];
    return (
      <>
        <Radio
          label="Gender"
          items={genderRadioList}
          direction={Directions.HORIZONTAL}
          selectedValue="Male"
          onValueChange={setGender}
        />
        <div className="text-center mt-4">
          <Button
            label="Save"
            variant={ButtonVariants.SUCCESS}
            onClick={() => alert("You selected " + gender + " as your Gender")}
          />
        </div>
      </>
    );
  },
};
