import React from "react";
import { ButtonVariants, ButtonProps } from "./DTOs";
import "./Button.scss";

const Button = (prop: ButtonProps) => {
  let { label, onClick, variant, classNames = "", isDisabled = false } = prop;
  const maxLabelLength: number = 13;
  const isValidLabel: boolean = label.length <= maxLabelLength ? true : false;
  if (!isValidLabel) isDisabled = true;

  return (
    <>
      <button className={`button ${variant} ${classNames} ${isDisabled ? "disabled" : ""}`} onClick={onClick} disabled={isDisabled}>
        <span>{label.slice(0, maxLabelLength)}</span>
      </button>

      {!isValidLabel && (
        <>
          <br />
          <span className="text-danger d-inline-block mt-1">
            Button labels must be no longer than {maxLabelLength} characters
          </span>
        </>
      )}
    </>
  );
};

export { Button, ButtonVariants };