import { ModelDescription } from "./ModelProps/ModelDescription";
import { Dialog } from "../../shared/components/Dialog/Dialog";
import { Drawer } from "../../shared/components/Drawer/Drawer";
import { Button, ButtonVariants } from "../Button/Button";
import { ModelContent } from "./ModelProps/ModelContent";
import { ModelFooter } from "./ModelProps/ModelFooter";
import { ModelHeader } from "./ModelProps/ModelHeader";
import { ModelTitle } from "./ModelProps/ModelTitle";
import { useModelDevice } from "./useModelDevice";
import { useModelContext } from "./ModelContext";
import { ModelProvider } from "./ModelProvider";
import React, { useState } from "react";
import { ModelProps } from "./DTOs";

const Model = (props: ModelProps) => {
  const { title, description, content, submitLabel, cancelLabel, onSubmit, onCancel } = props;
  const isDesktop = useModelDevice("(min-width: 768px)");
  const [isModelOpen, setIsModelOpen] = useState(true);

  if (isDesktop) {
    return (
      <Dialog open={isModelOpen} onOpenChange={setIsModelOpen}>
        <ModelContent>
          {(title || description) && (
            <ModelHeader>
              <ModelTitle>{title}</ModelTitle>
              <ModelDescription>{description}</ModelDescription>
            </ModelHeader>
          )}
          {content}
          <ModelFooter>
            <div className="float-right">
              <Button
                label={cancelLabel || "Cancel"}
                variant={ButtonVariants.OUTLINE_SECONDARY}
                onClick={() => {
                  setIsModelOpen(false);
                  if (onCancel) onCancel();
                }}
                classNames="mx-2"
              />
              <Button
                label={submitLabel || "Submit"}
                variant={ButtonVariants.PRIMARY}
                onClick={() => {
                  let continueFunction = true;
                  if (onSubmit) {
                    continueFunction = onSubmit();
                  }
                  if (!continueFunction) return;
                  setIsModelOpen(false);
                }}
              />
            </div>
          </ModelFooter>
        </ModelContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isModelOpen} onOpenChange={setIsModelOpen}>
      <ModelContent>
        {(title || description) && (
          <ModelHeader>
            <ModelTitle>{title}</ModelTitle>
            <ModelDescription>{description}</ModelDescription>
          </ModelHeader>
        )}
        {content}
        <ModelFooter>
          <Button
            label={submitLabel || "Submit"}
            variant={ButtonVariants.PRIMARY}
            onClick={() => {
              let continueFunction = true;
              if (onSubmit) {
                continueFunction = onSubmit();
              }
              if (!continueFunction) return;
              setIsModelOpen(false);
            }}
            classNames="w-100 my-2"
          />
          <Button
            label={cancelLabel || "Cancel"}
            variant={ButtonVariants.OUTLINE_SECONDARY}
            onClick={() => {
              setIsModelOpen(false);
              if (onCancel) onCancel();
            }}
            classNames="w-100"
          />
        </ModelFooter>
      </ModelContent>
    </Drawer>
  );
};

export { Model, ModelProvider, useModelContext as useModel };
