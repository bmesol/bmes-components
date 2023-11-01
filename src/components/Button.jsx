import React from "react";
import "./../styles/css/main.css";
import { PropTypes } from 'prop-types';

// ----- * Button Component * -----
const ButtonVariants = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};
const Button = ({ label, variant, className, ...rest }) => {
  return (
    <>
      <button
        type="button"
        className={`button ${variant} ${className}`}
        {...rest}
      >
        {label}
      </button>
    </>
  );
};
Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(Object.values(ButtonVariants)).isRequired,
  className: PropTypes.string,
};

export { Button };
