import { Tooltip as SharedTooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "../../shared/components/Tooltip/Tooltip";
import { useModelDevice } from "../Model/useModelDevice";
import { TooltipProps, Positions } from "./DTOs";
import React, { useState } from "react";

const Tooltip = (props: TooltipProps) => {
  const { trigger, content, position } = props;
  const isTouchDevices = useModelDevice("(max-width: 768px)");
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  if (isTouchDevices) {
    return (
      <>
        <TooltipProvider>
          <SharedTooltip open={isTooltipOpen}>
            <TooltipTrigger onClick={() => setIsTooltipOpen(!isTooltipOpen)}>
              {trigger}
            </TooltipTrigger>
            <TooltipContent side={position}>{content}</TooltipContent>
          </SharedTooltip>
        </TooltipProvider>
      </>
    );
  }

  return (
    <>
      <TooltipProvider>
        <SharedTooltip>
          <TooltipTrigger>{trigger}</TooltipTrigger>
          <TooltipContent side={position}>{content}</TooltipContent>
        </SharedTooltip>
      </TooltipProvider>
    </>
  );
};

export { Tooltip, Positions };
