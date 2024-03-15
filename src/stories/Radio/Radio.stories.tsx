import { Button, ButtonVariants } from "../../lib/components/Button/Button";
import { RadioGroup, Radio } from "../../lib/components/Radio/Radio";
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
      return (
        <>
          <RadioGroup defaultValue="Male" onValueChange={setGender} classNames="d-flex mt-4">
            <div className="mb-2 text-primary">Select Gender : </div>
            <Radio id="1" value="Male" label={"Male"} />
            <Radio id="2" value="Female" label={"Female"} />
          </RadioGroup>

          <Button
            label="Show Gender"
            variant={ButtonVariants.OUTLINE_SECONDARY}
            onClick={() => {
              alert("You selected " + gender + " as your Gender");
            }}
            classNames="mt-3 mb-4"
          />
        </>
      );
    };
    return <App />;
  },
};
