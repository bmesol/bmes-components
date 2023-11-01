import { Button } from "./../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  label: "Primary Button",
  variant: "primary",
};

Secondary.args = {
  label: "Secondary Button",
  variant: "secondary",
};
