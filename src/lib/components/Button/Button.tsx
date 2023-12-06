import React from "react";
import { ButtonProps } from "./DTOs";
import "./Button.scss";

// --- Button component ---
const Button = ({
  label,
  onClick,
  variant,
  className,
  isDisabled = false,
}: ButtonProps) => {
  // --- Maximum allowed characters for the button label ---
  const maxLabelLength: number = 13;

  // --- Check if label length exceeds the maximum allowed length ---
  const isValidLabel: boolean = label.length <= maxLabelLength ? true : false;

  // --- Disable button if the label is invalid ---
  if (!isValidLabel) isDisabled = true;

  return (
    <>
      <button
        className={`button ${variant} ${className} ${
          isDisabled ? "disabled-button" : ""
        }`}
        onClick={onClick}
        disabled={isDisabled}
      >
        <span>{label.slice(0, maxLabelLength)}</span>
      </button>

      {/* --- Error message if the label exceeds the maximum length --- */}
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

export { Button };