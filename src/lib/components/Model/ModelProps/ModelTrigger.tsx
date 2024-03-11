import { DialogTrigger } from "../../../shared/components/Dialog/Dialog";
import { DrawerTrigger } from "../../../shared/components/Drawer/Drawer";
import { useModelDevice } from "../useModelDevice";
import { ModelTypes } from "../DTOs";
import React from "react";

const ModelTrigger = ({ children, classNames = "" }: ModelTypes) => {
  const isDesktop = useModelDevice("(min-width: 768px)");
  if (isDesktop) {
    return (
      <DialogTrigger asChild className={`${classNames}`}>
        {children}
      </DialogTrigger>
    );
  }
  return (
    <DrawerTrigger asChild className={`${classNames}`}>
      {children}
    </DrawerTrigger>
  );
};

export { ModelTrigger };
