import { ModelPopup, ModelPopupTrigger, ModelPopupContent, ModelPopupHeader, ModelPopupTitle, ModelPopupDescription, ModelPopupFooter, ModelPopupClose } from "../../lib/components/ModelPopup/ModelPopup";
import { Label, LabelTypes, LabelVariants } from "../../lib/components/Label/Label";
import { Button, ButtonVariants } from "../../lib/components/Button/Button";
import { TextBox } from "../../lib/components/TextBox/TextBox";
import type { Meta, StoryObj } from "@storybook/react";
import { cn } from "../../lib/shared/components/DTOs";
import React, { useState } from "react";

const meta: Meta<typeof ModelPopup> = {
  title: "Components/Model Popup",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Model_Popup = {
  render: (children: React.ReactElement) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <ModelPopup isModelPopupOpen={open} onModelPopupOpenChange={setOpen}>
          <ModelPopupTrigger>
            <Button
              label="Edit Profile"
              variant={ButtonVariants.PRIMARY}
              onClick={() => {}}
            />
          </ModelPopupTrigger>
          <ModelPopupContent>
            <ModelPopupHeader classNames="text-start">
              <ModelPopupTitle>Edit profile</ModelPopupTitle>
              <ModelPopupDescription>
                Make changes to your profile here. Click save when you're done.
              </ModelPopupDescription>
            </ModelPopupHeader>
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
                <TextBox value={""} onChange={() => {}} classNames="w-100" />
              </div>
              <div className="grid gap-2">
                <Label
                  type={LabelTypes.TEXT}
                  label="Email"
                  variant={LabelVariants.DEFAULT}
                />
                <TextBox value={""} onChange={() => {}} classNames="w-100" />
              </div>
              <Button
                label="Save changes"
                variant={ButtonVariants.SUCCESS}
                onClick={() => {}}
              />
            </form>
            <ModelPopupFooter>
              <ModelPopupClose>
                <Button
                  label="Cancel"
                  variant={ButtonVariants.OUTLINE_DANGER}
                  onClick={() => {}}
                  classNames="w-100"
                />
              </ModelPopupClose>
            </ModelPopupFooter>
          </ModelPopupContent>
        </ModelPopup>
      </>
    );
  },
};
