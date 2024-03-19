enum Positions {
  TOP = "top",
  RIGHT = "right",
  BOTTOM = "bottom",
  LEFT = "left",
}

interface TooltipProps {
  content: React.ReactNode;
  position?: Positions;
}

interface TooltipContextValues {
  show: (props: TooltipProps) => void;
}

interface TooltipProviderProps {
  children: React.ReactElement;
}

export { TooltipProps, Positions, TooltipContextValues, TooltipProviderProps };
