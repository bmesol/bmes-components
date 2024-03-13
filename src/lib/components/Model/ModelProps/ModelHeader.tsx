import { DialogHeader } from "../../../shared/components/Dialog/Dialog";
import { DrawerHeader } from "../../../shared/components/Drawer/Drawer";
import { useModelDevice } from "../useModelDevice";
import { ModelTypes } from "../DTOs";
import React from "react";

const ModelHeader = ({ children }: ModelTypes) => {
  const isDesktop = useModelDevice("(min-width: 768px)");
  if (isDesktop) {
    return <DialogHeader className="text-start">{children}</DialogHeader>;
  }
  return <DrawerHeader className="px-0 text-start">{children}</DrawerHeader>;
};

export { ModelHeader };
