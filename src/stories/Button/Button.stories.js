import { Button, ButtonVariants } from "./../../components/Button";
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
