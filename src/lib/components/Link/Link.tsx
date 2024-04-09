import { LinkProps, LinkVariants, LinkTargetTypes } from "./DTOs";
import React from "react";
import "./Link.scss";

const Link = (props: LinkProps) => {
  const { label = "", variant, href = "", target = "", onClick, classNames = "" } = props;

  return (
    <>
      <a href={href} target={target} onClick={onClick} className={`link ${variant} ${classNames}`}>
        {label}
      </a>
    </>
  );
};

export { Link, LinkVariants, LinkTargetTypes };
