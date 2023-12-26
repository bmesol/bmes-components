import React from "react";
import { LabelVariants, LabelProps } from "./DTOs";
import "./Label.scss";
// --- Label component ---
const Label = (props: LabelProps) => {
  const { type = "", variant, classNames = "", href = "", label = "" } = props;

  return (
    <label className={`${variant} ${type} ${classNames}`}>
      {type === "link" ? <a href={href}>{label}</a> : <span>{label}</span>}
    </label>
  );
};

export { Label, LabelVariants };