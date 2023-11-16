import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export enum ButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  WARNING = "warning",
  DANGER = "danger",
  OUTLINE_PRIMARY = "outline-primary",
  OUTLINE_SECONDARY = "outline-secondary",
  OUTLINE_SUCCESS = "outline-success",
  OUTLINE_WARNING = "outline-warning",
  OUTLINE_DANGER = "outline-danger",
}

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant: ButtonVariants;
  classNames?: string;
  isDisabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant,
  classNames = "",
  isDisabled = false,
}) => {
  const maxLabelLength: number = 13;
  const isValidLabel: boolean = label.length <= maxLabelLength ? true : false;
  if (!isValidLabel) isDisabled = true;
  return (
    <>
      <button
        className={`button ${variant} ${classNames} ${isDisabled ? "disabled-button" : ""
          }`}
        onClick={onClick}
        disabled={isDisabled}
      >
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

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(Object.values(ButtonVariants)).isRequired,
  classNames: PropTypes.string,
  isDisabled: PropTypes.bool,
};