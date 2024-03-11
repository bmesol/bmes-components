import { DialogHeader } from "../../../shared/components/Dialog/Dialog";
import { DrawerHeader } from "../../../shared/components/Drawer/Drawer";
import { useModelDevice } from "../useModelDevice";
import { ModelTypes } from "../DTOs";
import React from "react";

const ModelHeader = ({ children, classNames = "" }: ModelTypes) => {
  const isDesktop = useModelDevice("(min-width: 768px)");
  if (isDesktop) {
    return <DialogHeader className={`${classNames}`}>{children}</DialogHeader>;
  }
  return <DrawerHeader className={`${classNames}`}>{children}</DrawerHeader>;
};

export { ModelHeader };
