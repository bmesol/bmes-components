import { DialogTitle } from "../../../shared/components/Dialog/Dialog";
import { DrawerTitle } from "../../../shared/components/Drawer/Drawer";
import { ModelTypes } from "../DTOs";
import { useModelDevice } from "../useModelDevice";
import React from "react";

const ModelTitle = ({ children, classNames = "" }: ModelTypes) => {
  const isDesktop = useModelDevice("(min-width: 768px)");
  if (isDesktop) {
    return <DialogTitle className={`${classNames}`}>{children}</DialogTitle>;
  }
  return <DrawerTitle className={`${classNames}`}>{children}</DrawerTitle>;
};

export { ModelTitle };
