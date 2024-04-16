import { Select, Button, ButtonVariants } from "../../lib";
import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const SampleSelect: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const courses = [
      {
        value: "Mechatronics Engineering",
        label: "Mechatronics Engineering",
      },
      {
        value: "Computer Science and Engineering",
        label: "Computer Science and Engineering",
      },
      {
        value: "Information Technology",
        label: "Information Technology",
      },
      {
        value: "Mechanical Engineering",
        label: "Mechanical Engineering",
      },
    ];

    const handleSubmission = () => {
      if (value !== "") {
        confirm(`Are you sure you want to select "${value}" as your course?`);
      } else {
        alert("Please select your course");
      }
    };

    return (
      <div style={{ minWidth: "25vw" }}>
        <Select
          label="Courses"
          items={courses}
          onValueChange={setValue}
        />
        <div className="text-center">
          <Button
            label="Submit"
            variant={ButtonVariants.SECONDARY}
            onClick={handleSubmission}
            classNames="mt-4"
          />
        </div>
      </div>
    );
  },
};
