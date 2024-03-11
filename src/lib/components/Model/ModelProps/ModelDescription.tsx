import { DialogDescription } from "../../../shared/components/Dialog/Dialog";
import { DrawerDescription } from "../../../shared/components/Drawer/Drawer";
import { useModelDevice } from "../useModelDevice";
import { ModelTypes } from "../DTOs";
import React from "react";

const ModelDescription = ({ children, classNames = "" }: ModelTypes) => {
  const isDesktop = useModelDevice("(min-width: 768px)");
  if (isDesktop) {
    return (
      <DialogDescription className={`${classNames}`}>
        {children}
      </DialogDescription>
    );
  }
  return (
    <DrawerDescription className={`${classNames}`}>
      {children}
    </DrawerDescription>
  );
};

export { ModelDescription };
