import { Combobox, Button, ButtonVariants } from "../../lib";
import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

const meta: Meta<typeof Combobox> = {
  title: "Components/Combobox",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Combobox>;

export const SampleCombobox: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const courses = [{ label: "Tamil", value: "Tamil" }, { label: "English", value: "English" }];

    const handleCreate = () => {
      confirm("Are you sure you want to add new option?");
      window.location.reload();
    };

    return (
      <>
        <div style={{ minWidth: "350px" }}>
          <Combobox
            label="Select your language"
            items={courses}
            onValueChange={setValue}
            showCreateButton={true}
            onCreate={handleCreate}
          />
        </div>
        <div className="text-center">
          <Button
            label="Save"
            variant={ButtonVariants.SUCCESS}
            onClick={() => {
              if (value !== "") alert("Your language set to " + value);
              else alert("Please select your language");
            }}
            classNames="mt-4"
          />
        </div>
      </>
    );
  },
};
