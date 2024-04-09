import { DialogContent } from "../../../shared/components/Dialog/Dialog";
import { DrawerContent } from "../../../shared/components/Drawer/Drawer";
import { useModelDevice } from "../useModelDevice";
import { ModelTypes } from "../DTOs";
import React from "react";

const ModelContent = ({ children }: ModelTypes) => {
  const isDesktop = useModelDevice("(min-width: 768px)");
  if (isDesktop) {
    return (
      <DialogContent className="sm:max-w-[425px]">{children}</DialogContent>
    );
  }
  return <DrawerContent className="px-4 pb-4">{children}</DrawerContent>;
};

export { ModelContent };
