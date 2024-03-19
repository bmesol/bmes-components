import { Tooltip as SharedTooltip, TooltipTrigger, TooltipContent, TooltipProvider as SharedTooltipProvider } from "../../shared/components/Tooltip/Tooltip";
import { useTooltipContext } from "./TooltipContext";
import { TooltipProvider } from "./TooltipProvider";
import React, { useState } from "react";
import { TooltipProps, Positions } from "./DTOs";

const Tooltip = (props: TooltipProps) => {
  const { content, position } = props;
  const [isTooltipOpen, setIsTooltipOpen] = useState(true);
  return (
    <>
      <SharedTooltipProvider>
        <SharedTooltip open={isTooltipOpen} onOpenChange={setIsTooltipOpen}>
          <TooltipContent side={position}>{content}</TooltipContent>
        </SharedTooltip>
      </SharedTooltipProvider>
    </>
  );
};

export { Tooltip, TooltipProvider, useTooltipContext as useTooltip, Positions };
