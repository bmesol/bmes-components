import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "../../shared/components/Dialog/Dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../../shared/components/Drawer/Drawer";
import { useModelPopup } from "./useModelPopup";
import { ModelPopupProps, ModelPopupTypes } from "./DTOs";

const ModelPopupTrigger = ({ children, classNames="" }: ModelPopupTypes) => {
  const isDesktop = useModelPopup("(min-width: 768px)");
  if (isDesktop) {
    return <DialogTrigger asChild className={`${classNames}`}>{children}</DialogTrigger>;
  }
  return <DrawerTrigger asChild className={`${classNames}`}>{children}</DrawerTrigger>;
};

const ModelPopupContent = ({ children, classNames="" }: ModelPopupTypes) => {
  const isDesktop = useModelPopup("(min-width: 768px)");
  if (isDesktop) {
    return <DialogContent className={`${classNames} sm:max-w-[425px]`}>{children}</DialogContent>;
  }
  return <DrawerContent className={`${classNames}`}>{children}</DrawerContent>;
};

const ModelPopupHeader = ({ children, classNames = "" }: ModelPopupTypes) => {
  const isDesktop = useModelPopup("(min-width: 768px)");
  if (isDesktop) {
    return <DialogHeader className={`${classNames}`}>{children}</DialogHeader>;
  }
  return <DrawerHeader className={`${classNames}`}>{children}</DrawerHeader>;
};

const ModelPopupTitle = ({ children, classNames = "" }: ModelPopupTypes) => {
  const isDesktop = useModelPopup("(min-width: 768px)");
  if (isDesktop) {
    return <DialogTitle className={`${classNames}`}>{children}</DialogTitle>;
  }
  return <DrawerTitle className={`${classNames}`}>{children}</DrawerTitle>;
};

const ModelPopupDescription = ({ children, classNames = "" }: ModelPopupTypes) => {
  const isDesktop = useModelPopup("(min-width: 768px)");
  if (isDesktop) {
    return <DialogDescription className={`${classNames}`}>{children}</DialogDescription>;
  }
  return <DrawerDescription className={`${classNames}`}>{children}</DrawerDescription>;
};

const ModelPopupFooter = ({ children, classNames = "" }: ModelPopupTypes) => {
  const isDesktop = useModelPopup("(min-width: 768px)");
  if (isDesktop) {
    return <DialogFooter className={`${classNames}`}>{children}</DialogFooter>;
  }
  return <DrawerFooter className={`${classNames}`}>{children}</DrawerFooter>;
};

const ModelPopupClose = ({ children, classNames = "" }: ModelPopupTypes) => {
  const isDesktop = useModelPopup("(min-width: 768px)");
  if (isDesktop) {
    return <DialogClose asChild className={`${classNames}`}>{children}</DialogClose>;
  }
  return <DrawerClose asChild className={`${classNames}`}>{children}</DrawerClose>;
};

const ModelPopup = ({ isModelPopupOpen, onModelPopupOpenChange, children }: ModelPopupProps) => {
  const isDesktop = useModelPopup("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={isModelPopupOpen} onOpenChange={onModelPopupOpenChange}>
        {children}
      </Dialog>
    );
  }

  return (
    <Drawer open={isModelPopupOpen} onOpenChange={onModelPopupOpenChange}>
      {children}
    </Drawer>
  );
};

export { ModelPopup, ModelPopupTrigger, ModelPopupContent, ModelPopupHeader, ModelPopupTitle, ModelPopupDescription, ModelPopupFooter, ModelPopupClose };
