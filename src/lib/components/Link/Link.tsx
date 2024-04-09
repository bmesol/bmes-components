import { LinkProps, LinkVariants, LinkTargetTypes } from "./DTOs";
import { useLink } from "./useLink";
import React from "react";
import "./Link.scss";

const Link = (props: LinkProps) => {
  const { label = "", variant, href = "", target = "", classNames = "" } = props;
  const {handleClick} = useLink(props)
  return (
    <>
      <a href={href} target={target} onClick={handleClick} className={`link ${variant} ${classNames}`}>
        {label}
      </a>
    </>
  );
};

export { Link, LinkVariants, LinkTargetTypes };
