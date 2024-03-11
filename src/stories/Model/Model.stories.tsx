import { Model } from "../../lib/components/Model/Model";
import { Button, ButtonVariants } from "../../lib/components/Button/Button";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ModelProvider } from "../../lib/components/Model/ModelProvider";
import { useModel } from "../../lib/components/Model/Model";
import { cn } from "../../lib/shared/components/DTOs";
import { LabelTypes, LabelVariants } from "../../lib/components/Label/DTOs";
import { Label } from "../../lib/components/Label/Label";
import { TextBox } from "../../lib/components/TextBox/TextBox";

const meta: Meta<typeof Model> = {
  title: "Components/Model Popup",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Model_Popup = {
  render: (children: React.ReactElement): JSX.Element => {
    const App = () => {
      const model = useModel();
      return (
        <>
          <Button
            variant={ButtonVariants.PRIMARY}
            label="Open Model"
            classNames="bg-dark text-bg-dark m-3"
            onClick={() =>
              model.open({
                title: "Edit profile",
                description:
                  "Make changes to your profile here. Click save when you're done.",
                content: (
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className={cn("grid items-start gap-4 px-4 px-md-0")}
                  >
                    <div className="grid gap-2">
                      <Label
                        type={LabelTypes.TEXT}
                        label="User Name"
                        variant={LabelVariants.DEFAULT}
                      />
                      <TextBox
                        value={""}
                        onChange={() => {}}
                        classNames="w-100"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label
                        type={LabelTypes.TEXT}
                        label="Email"
                        variant={LabelVariants.DEFAULT}
                      />
                      <TextBox
                        value={""}
                        onChange={() => {}}
                        classNames="w-100"
                      />
                    </div>
                  </form>
                ),
                submitLabel: "Submit",
                cancelLabel: "Cancel",
                onSubmit: () => confirm("Do want to save these changes?"),
                onCancel: () => alert("Do want to close?"),
              })
            }
          />
        </>
      );
    };
    return (
      <ModelProvider>
        <App />
      </ModelProvider>
    );
  },
};
