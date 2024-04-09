import { Button, ButtonVariants, Label, LabelVariants, Link, LinkVariants, Pin, TextBox } from "../../lib";
import { Card } from "./../../lib/components/Card/Card";
import type { Meta, StoryObj } from "@storybook/react";
import CardDoc from "./CardDoc.md";
import React from "react";

const meta: Meta<typeof Card> = {
  title: "components/Card",
  tags: ["autodocs"],
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: CardDoc,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Card_Sample: Story = {
  render: (children) => (
    <>
      <Card>
        <div style={{ width: "250px" }}>
          <Label
            label="User Login"
            variant={LabelVariants.SUCCESS}
            classNames="w-100 text-center mb-3 fs-5"
          />
          <TextBox
            label="User Name"
            placeholder="Enter your username"
            regex="^[A-Za-z]*$"
            value=""
            onChange={() => {}}
            classNames="w-100 mb-3"
          />
          <Pin label="Pin" length={4} value="" onChange={() => {}} />
          <Link
            label="Forget pin?"
            variant={LinkVariants.DEFAULT}
            classNames="mt-2"
            href=""
          />
          <Button
            label="Sign in"
            variant={ButtonVariants.PRIMARY}
            classNames="w-100 mt-4"
            onClick={() => alert("Sign in Successfully")}
          />
        </div>
      </Card>
    </>
  ),
};
