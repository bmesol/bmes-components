import React from "react";
import { TooltipContext } from "./TooltipContext";
import { TooltipProviderProps } from "./DTOs";
import { useTooltip } from "./useTooltip";
import { Tooltip } from "./Tooltip";

const TooltipProvider = ({ children }: TooltipProviderProps) => {
  const { contextValue, tooltips } = useTooltip();
  return (
    <TooltipContext.Provider value={contextValue}>
      {children}
      {tooltips.map((tooltip) => {
        return (
          <Tooltip
            key={Date.now()}
            content={tooltip.content}
            position={tooltip.position}
          />
        );
      })}
    </TooltipContext.Provider>
  );
};

export { TooltipProvider };
