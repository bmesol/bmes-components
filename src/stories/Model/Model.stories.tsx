import { Model, useModel, ModelProvider, Button, ButtonVariants, Label, LabelVariants, TextBox } from "../../lib";
import { cn } from "../../lib/shared/components/DTOs";
import type { Meta } from "@storybook/react";
import React from "react";

const meta: Meta<typeof Model> = {
  title: "Components/Model",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const SampleModel = {
  render: () => {
    const App = () => {
      const model = useModel();
      return (
        <>
          <Button
            variant={ButtonVariants.SUCCESS}
            label="Open Model"
            classNames="m-3 bg-dark text-white"
            onClick={() =>
              model.open({
                title: "Edit profile",
                description:
                  "Make changes to your profile here. Click save when you're done.",
                content: (
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className={cn("grid items-start gap-4")}
                  >
                    <div className="grid gap-2">
                      <Label
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
                        label="Email"
                        variant={LabelVariants.DEFAULT}
                      />
                      <TextBox
                        value={""}
                        onChange={() => {}}
                        classNames="w-100"
                      />
                    </div>
                    <div className="d-flex flex-md-row-reverse flex-column flex-md-row gap-3">
                      <Button
                        label="Save"
                        variant={ButtonVariants.PRIMARY}
                        onClick={() => model.close()}
                        classNames="float-md-end"
                      />
                      <Button
                        label="Cancel"
                        variant={ButtonVariants.OUTLINE_SECONDARY}
                        onClick={() => model.close()}
                        classNames="float-md-end"
                      />
                    </div>
                  </form>
                ),
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
