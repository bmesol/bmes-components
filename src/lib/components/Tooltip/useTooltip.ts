import { useState, useMemo } from "react";
import { TooltipProps } from "./DTOs";

const useTooltip = () => {
  const [tooltips, setTooltips] = useState<TooltipProps[]>([]);

  const contextValue = useMemo(
    () => ({ show: (props: TooltipProps) => setTooltips([props]) }), []
  );

  return {
    contextValue,
    tooltips,
  };
};

export { useTooltip };
