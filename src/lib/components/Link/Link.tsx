import { LinkProps, LinkVariants } from "./DTOs";
import React from "react";
import "./Link.scss";

const Link = (props: LinkProps) => {
  const { label = "", variant, href = "", target = "", onClick, classNames = "" } = props;

  return (
    <div className={`link ${variant} ${classNames}`}>
      <a href={href} target={target} onClick={onClick}>
        {label}
      </a>
    </div>
  );
};

export { Link, LinkVariants };
