import { ButtonVariants, ButtonProps } from "./DTOs";
import React from "react";
import "./Button.scss";

const Button = (props: ButtonProps) => {
  let { icon, label, onClick, variant, classNames = "", isDisabled = false } = props;

  const maxLabelLength: number = 13;
  const isValidLabel: boolean = label.length <= maxLabelLength ? true : false;

  if (!isValidLabel) isDisabled = true;

  return (
    <>
      <button className={`${variant} ${classNames} ${isDisabled ? "disabled" : ""}`} onClick={onClick} disabled={isDisabled}>
        <div className="d-flex justify-content-center align-items-center">
          {icon && <span className="me-2">{icon}</span>}
          <span>{label.slice(0, maxLabelLength)}</span>
        </div>
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
