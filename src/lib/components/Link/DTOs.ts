import { To } from "react-router-dom";

interface LinkProps {
  to: To;
  target?: string;
  children: React.ReactNode;
  className?: string;
}

export { LinkProps };
