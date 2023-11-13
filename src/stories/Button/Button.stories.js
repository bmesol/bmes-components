import { Button, ButtonVariants } from "../../lib/components/Button/Button";
import ButtonDoc from "./ButtonDoc.md";

export default {
  title: "Components/Button",
  tags: ["autodocs"],
  component: Button,
  parameters: {
    docs: {
      description: {
        component: ButtonDoc,
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  variant: ButtonVariants.PRIMARY,
  onClick: () => {
    alert("You clicked on Primary Button");
  },
  isDisabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  variant: ButtonVariants.SECONDARY,
  onClick: () => {
    alert("You clicked on Secondary Button");
  },
  isDisabled: false,
};

export const Success = Template.bind({});
Success.args = {
  label: "Success",
  variant: ButtonVariants.SUCCESS,
  onClick: () => {
    alert("You clicked on Success Button");
  },
  isDisabled: false,
};

export const Warning = Template.bind({});
Warning.args = {
  label: "Warning",
  variant: ButtonVariants.WARNING,
  onClick: () => {
    alert("You clicked on Warning Button");
  },
  isDisabled: false,
};

export const Danger = Template.bind({});
Danger.args = {
  label: "Danger",
  variant: ButtonVariants.DANGER,
  onClick: () => {
    alert("You clicked on Danger Button");
  },
  isDisabled: false,
};

export const Outline_Primary = Template.bind({});
Outline_Primary.args = {
  label: "Out Primary",
  variant: ButtonVariants.OUTLINE_PRIMARY,
  onClick: () => {
    alert("You clicked on Outline Primary Button");
  },
  isDisabled: false,
};

export const Outline_Secondary = Template.bind({});
Outline_Secondary.args = {
  label: "Out Secondary",
  variant: ButtonVariants.OUTLINE_SECONDARY,
  onClick: () => {
    alert("You clicked on Outline Secondary Button");
  },
  isDisabled: false,
};

export const Outline_Success = Template.bind({});
Outline_Success.args = {
  label: "Out Success",
  variant: ButtonVariants.OUTLINE_SUCCESS,
  onClick: () => {
    alert("You clicked on Outline Success Button");
  },
  isDisabled: false,
};

export const Outline_Warning = Template.bind({});
Outline_Warning.args = {
  label: "Out Warning",
  variant: ButtonVariants.OUTLINE_WARNING,
  onClick: () => {
    alert("You clicked on Outline Warning Button");
  },
  isDisabled: false,
};

export const Outline_Danger = Template.bind({});
Outline_Danger.args = {
  label: "Out Danger",
  variant: ButtonVariants.OUTLINE_DANGER,
  onClick: () => {
    alert("You clicked on Outline Danger Button");
  },
  isDisabled: false,
};
