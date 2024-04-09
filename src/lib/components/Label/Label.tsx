import { LabelProps, LabelVariants } from "./DTOs";
import React from "react";
import "./Label.scss";

const Label = (props: LabelProps) => {
  const { label = "", variant, classNames = "" } = props;

  return (
    <div className={`label ${variant} ${classNames}`}>
      <p>{label}</p>
    </div>
  );
};

export { Label, LabelVariants };
