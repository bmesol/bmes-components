import React from "react";
import { ToastProvider, useToast } from "./../../lib/components/Toast/Toast";
import ToastDoc from "./ToastDoc.md";
import { Button, ButtonVariants } from "../../lib/components/Button/Button";

const meta = {
  title: "Components/Toast",
  tags: ["autodocs"],
  component: ToastProvider,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ToastDoc,
      },
    },
  },
};

export default meta;

export const Toast = {
  render: (children: React.ReactElement): JSX.Element => {
    const App = () => {
      const toast = useToast();
      return (
        <>
          <Button
            variant={ButtonVariants.PRIMARY}
            label="Toast Info"
            classNames="bg-dark text-bg-dark m-3"
            onClick={() => toast.info("Message text here.", "Heading text")}
          />
          <Button
            variant={ButtonVariants.SUCCESS}
            label="Toast Success"
            classNames="m-3"
            onClick={() => toast.success("Message text here.", "Heading text")}
          />
          <Button
            variant={ButtonVariants.WARNING}
            label="Toast Warning"
            classNames="m-3"
            onClick={() => toast.warning("Message text here.", "Heading text")}
          />
          <Button
            variant={ButtonVariants.DANGER}
            label="Toast Error"
            classNames="m-3"
            onClick={() => toast.error("Message text here.", "Heading text")}
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