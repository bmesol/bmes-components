enum Positions {
  TOP = "top",
  RIGHT = "right",
  BOTTOM = "bottom",
  LEFT = "left",
}

interface TooltipProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  position?: Positions;
}

export { TooltipProps, Positions };
