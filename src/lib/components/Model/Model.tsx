import { ModelDescription } from "./ModelProps/ModelDescription";
import { Dialog } from "../../shared/components/Dialog/Dialog";
import { Drawer } from "../../shared/components/Drawer/Drawer";
import { ModelContent } from "./ModelProps/ModelContent";
import { ModelHeader } from "./ModelProps/ModelHeader";
import { ModelTitle } from "./ModelProps/ModelTitle";
import { useModelDevice } from "./useModelDevice";
import { useModelContext } from "./ModelContext";
import { ModelProvider } from "./ModelProvider";
import React, { useState } from "react";
import { ModelProps } from "./DTOs";

const Model = (props: ModelProps) => {
  const { title, description, content, isOpen } = props;
  const isDesktop = useModelDevice("(min-width: 768px)");
  const [isModelOpen, setIsModelOpen] = useState(isOpen);

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
      </ModelContent>
    </Drawer>
  );
};

export { Model, ModelProvider, useModelContext as useModel };
