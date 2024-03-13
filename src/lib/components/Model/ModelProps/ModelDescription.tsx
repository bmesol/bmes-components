import { DialogDescription } from "../../../shared/components/Dialog/Dialog";
import { DrawerDescription } from "../../../shared/components/Drawer/Drawer";
import { useModelDevice } from "../useModelDevice";
import { ModelTypes } from "../DTOs";
import React from "react";

const ModelDescription = ({ children }: ModelTypes) => {
  const isDesktop = useModelDevice("(min-width: 768px)");
  if (isDesktop) {
    return <DialogDescription>{children}</DialogDescription>;
  }
  return <DrawerDescription>{children}</DrawerDescription>;
};

export { ModelDescription };
