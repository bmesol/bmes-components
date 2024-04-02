import { Dropdown } from "../../lib/components/Dropdown/Dropdown";
import { Button, ButtonVariants } from "../../lib";
import React, { useState } from "react";

const meta = {
  title: "Components/Dropdown",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Sample_Dropdown = {
  render: (children: React.ReactElement) => {
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
        value: "Mechanical Engineering",
        label: "Mechanical Engineering",
      },
      {
        value: "Civil Engineering",
        label: "Civil Engineering",
      },
      {
        value: "Information Technology",
        label: "Information Technology",
      },
    ];

    return (
      <div className="my-3">
        <div style={{ minWidth: "350px" }}>
          <Dropdown
            label="UG Courses"
            items={courses}
            placeholder="Select Branch"
            isSearch={true}
            onValueChange={(value: string) => setValue(value)}
          />
        </div>
        <div>
          <Button
            label="Submit"
            variant={ButtonVariants.SECONDARY}
            onClick={() => {
              if (value !== "") {
                confirm(
                  "Are you sure you want to select " + value + " as your course?"
                );
              } else {
                alert("Please select your course");
              }
            }}
            classNames="mt-4"
          />
        </div>
      </div>
    );
  },
};
