import { DialogFooter } from "../../../shared/components/Dialog/Dialog";
import { DrawerFooter } from "../../../shared/components/Drawer/Drawer";
import { useModelDevice } from "../useModelDevice";
import { ModelTypes } from "../DTOs";
import React from "react";

const ModelFooter = ({ children, classNames = "" }: ModelTypes) => {
  const isDesktop = useModelDevice("(min-width: 768px)");
  if (isDesktop) {
    return <DialogFooter className={`${classNames}`}>{children}</DialogFooter>;
  }
  return <DrawerFooter className={`${classNames}`}>{children}</DrawerFooter>;
};

export { ModelFooter };
