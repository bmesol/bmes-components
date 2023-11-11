import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export const ButtonVariants = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUCCESS: "success",
  WARNING: "warning",
  DANGER: "danger",
};
export const Button = ({
  label,
  onClick,
  variant,
  classNames = "",
  isDisabled = false,
}) => {
  const maxLabelLength = 13;
  const isValidLabel = label.length <= maxLabelLength ? true : false;
  if (!isValidLabel) isDisabled = true;
  return (
    <>
      <button
        className={`button ${variant} ${classNames} ${
          isDisabled ? "disabled-button" : ""
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
