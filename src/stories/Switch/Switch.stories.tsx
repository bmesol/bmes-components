import { Switch, ToastProvider, useToast, Button, ButtonVariants } from "./../../lib";
import React, { useState } from "react";

const meta = {
  title: "Components/Switch",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const SampleSwitch = {
  render: () => {
    const App = () => {
      const toast = useToast();
      const [isActive, setIsActive] = useState(false);

      const handleStatusButton = () => {
        if (isActive) {
          toast.success("Active User");
        } else {
          toast.info("In Active User");
        }
      };
      return (
        <>
          <Switch label="Is Active" onCheckedChange={setIsActive} />
          <Button
            variant={ButtonVariants.PRIMARY}
            label="Show Status"
            classNames="bg-dark text-bg-dark mt-4"
            onClick={handleStatusButton}
          />
        </>
      );
    };
    return (
      <ToastProvider>
        <App />
      </ToastProvider>
    );
  },
};
