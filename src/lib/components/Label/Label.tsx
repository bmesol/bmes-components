import { LabelProps, LabelVariants } from "./DTOs";
import React from "react";
import "./Label.scss";

const Label = (props: LabelProps) => {
  const { label = "", variant, classNames = "" } = props;
  return <p className={`label ${variant} ${classNames}`}>{label}</p>;
};

export { Label, LabelVariants };
