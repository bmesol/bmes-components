import { Card, Label, LabelVariants, ProfileImage, ProfileImageSizes } from "../../lib";
import type { Meta, StoryObj } from "@storybook/react";
import { Smartphone } from "lucide-react";
import React from "react";

const meta: Meta<typeof Card> = {
  title: "components/Card",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const SampleCard: Story = {
  render: () => (
    <>
      <Card classNames="d-flex flex-row justify-content-between">
        <div className="d-flex align-items-center img-fluid">
            <ProfileImage alt="Tony stark" size={ProfileImageSizes.SM} />
          <div className="ms-4">
            <Label label="Tony stark" variant={LabelVariants.DEFAULT} classNames="fw-bold" />
            <Label label="Admin" variant={LabelVariants.DEFAULT} classNames="my-2" />
            <div className="d-flex align-items-center">
              <Smartphone />
              <Label label="9087654321" variant={LabelVariants.DEFAULT} classNames="ms-1" />
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-5 p-2 bg-success"></div>
        </div>
      </Card>
    </>
  ),
};
