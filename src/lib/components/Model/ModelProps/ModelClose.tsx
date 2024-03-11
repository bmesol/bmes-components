import { DialogClose } from "../../../shared/components/Dialog/Dialog";
import { DrawerClose } from "../../../shared/components/Drawer/Drawer";
import { useModelDevice } from "../useModelDevice";
import { ModelTypes } from "../DTOs";
import React from "react";

const ModelClose = ({ children, classNames = "" }: ModelTypes) => {
  const isDesktop = useModelDevice("(min-width: 768px)");
  if (isDesktop) {
    return (
      <DialogClose asChild className={`${classNames}`}>
        {children}
      </DialogClose>
    );
  }
  return (
    <DrawerClose className={`${classNames}`}>
      {children}
    </DrawerClose>
  );
};

export { ModelClose };
