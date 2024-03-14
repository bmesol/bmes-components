import { LabelTypes, LabelVariants, LabelProps } from "./DTOs";
import { Link } from "react-router-dom";
import React from "react";
import "./Label.scss";

const Label = (props: LabelProps) => {
  const { type, variant, classNames = "", href = "", label = "", target = "" } = props;

  return (
    <div className={`label ${variant} ${type} ${classNames}`}>
      {type === "link" ? <Link to={href} target={target}>{label}</Link> : <span>{label}</span>}
    </div>
  );
};

export { Label, LabelTypes, LabelVariants };