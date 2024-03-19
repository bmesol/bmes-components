import { createContext, useContext } from "react";
import { TooltipContextValues } from "./DTOs";

const defaultTooltipContextValues: TooltipContextValues = {
  show: () => {},
};

const TooltipContext = createContext<TooltipContextValues>(defaultTooltipContextValues);
const useTooltipContext = () => useContext(TooltipContext);

export { TooltipContext, useTooltipContext };
