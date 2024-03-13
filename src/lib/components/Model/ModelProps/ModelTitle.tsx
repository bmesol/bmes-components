import { DialogTitle } from "../../../shared/components/Dialog/Dialog";
import { DrawerTitle } from "../../../shared/components/Drawer/Drawer";
import { ModelTypes } from "../DTOs";
import { useModelDevice } from "../useModelDevice";
import React from "react";

const ModelTitle = ({ children }: ModelTypes) => {
  const isDesktop = useModelDevice("(min-width: 768px)");
  if (isDesktop) {
    return <DialogTitle>{children}</DialogTitle>;
  }
  return <DrawerTitle>{children}</DrawerTitle>;
};

export { ModelTitle };
