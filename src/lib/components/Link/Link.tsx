import { BrowserRouter, Link as RouterLink } from "react-router-dom";
import { LinkProps } from "./DTOs";
import React from "react";

const Link = ({ to, target, children, className }: LinkProps) => {
  return (
    <BrowserRouter>
      <RouterLink to={to} target={target} className={className}>
        {children}
      </RouterLink>
    </BrowserRouter>
  );
};

export { Link };
