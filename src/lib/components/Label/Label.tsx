import { LabelTypes, LabelVariants, LabelProps } from "./DTOs";
import React from "react";
import "./Label.scss";

const Label = (props: LabelProps) => {
  const { type, variant, classNames = "", href = "", label = "", target = "" } = props;

  return (
    <div className={`label ${variant} ${type} ${classNames}`}>
      {type === "link" ? <a href={href} target={target}>{label}</a> : <span>{label}</span>}
    </div>
  );
};

export { Label, LabelTypes, LabelVariants };