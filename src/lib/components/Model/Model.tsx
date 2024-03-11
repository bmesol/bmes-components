import { ModelDescription } from "./ModelProps/ModelDescription";
import { Dialog } from "../../shared/components/Dialog/Dialog";
import { Drawer } from "../../shared/components/Drawer/Drawer";
import { Button, ButtonVariants } from "../Button/Button";
import { ModelTrigger } from "./ModelProps/ModelTrigger";
import { ModelContent } from "./ModelProps/ModelContent";
import { ModelFooter } from "./ModelProps/ModelFooter";
import { ModelHeader } from "./ModelProps/ModelHeader";
import { ModelClose } from "./ModelProps/ModelClose";
import { ModelTitle } from "./ModelProps/ModelTitle";
import { useModelDevice } from "./useModelDevice";
import { useModelContext } from "./ModelContext";
import { ModelProvider } from "./ModelProvider";
import React, { useState } from "react";
import { ModelProps } from "./DTOs";

const Model = (props: ModelProps) => {
  const {
    title,
    description,
    content,
    submitLabel,
    cancelLabel,
    onSubmit,
    onCancel,
    isOpen
  } = props;
  const isDesktop = useModelDevice("(min-width: 768px)");
  const [isModelOpen, setIsModelOpen] = useState(isOpen);

  if (isDesktop) {
    return (
      <Dialog open={isModelOpen} onOpenChange={setIsModelOpen}>
        <ModelContent>
          <ModelHeader classNames="text-start">
            <ModelTitle>{title}</ModelTitle>
            <ModelDescription>{description}</ModelDescription>
          </ModelHeader>
          {content}
          <Button
            label={submitLabel || "Save changes"}
            variant={ButtonVariants.SUCCESS}
            onClick={onSubmit}
          />
          <ModelFooter>
            <Button
              label={cancelLabel || "Cancel"}
              variant={ButtonVariants.OUTLINE_DANGER}
              onClick={() => {
                setIsModelOpen(false);
                if (onCancel) onCancel();
              }}
              classNames="w-100"
            />
          </ModelFooter>
        </ModelContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isModelOpen} onOpenChange={setIsModelOpen}>
      <ModelContent>
        <ModelHeader classNames="text-start">
          <ModelTitle>{title}</ModelTitle>
          <ModelDescription>{description}</ModelDescription>
        </ModelHeader>
        {content}
        <ModelFooter>
          <ModelClose>
            <Button
              label={submitLabel || "Save changes"}
              variant={ButtonVariants.SUCCESS}
              onClick={onSubmit}
              classNames="w-100 my-4"
            />
            <Button
              label={cancelLabel || "Cancel"}
              variant={ButtonVariants.OUTLINE_DANGER}
              onClick={onCancel || (() => {})}
              classNames="w-100"
            />
          </ModelClose>
        </ModelFooter>
      </ModelContent>
    </Drawer>
  );
};

export { Model, ModelProvider, useModelContext as useModel };
