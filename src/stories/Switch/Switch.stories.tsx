import { ToastProvider, useToast } from "./../../lib/components/Toast/Toast";
import { Button, ButtonVariants } from "../../lib/components/Button/Button";
import { Switch } from "../../lib/components/Switch/Switch";
import React, { useState } from "react";

const meta = {
  title: "Components/Switch",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Sample_Switch = {
  render: (children: React.ReactElement): JSX.Element => {
    const App = () => {
      const toast = useToast();
      const [isActive, setIsActive] = useState(false);

      const handleStatusButton = () => {
        if (isActive) {
          toast.success("Active User");
        } else {
          toast.info("Inactive User");
        }
      };
      return (
        <>
          <Switch label="Is Active" onCheckedChange={setIsActive} classNames="mt-4"/>

          <Button
            variant={ButtonVariants.PRIMARY}
            label="Show Status"
            classNames="bg-dark text-bg-dark mt-4 mb-2"
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
