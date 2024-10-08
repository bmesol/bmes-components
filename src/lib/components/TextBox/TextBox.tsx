import { TextBoxTypes, TextBoxProps } from "./DTOs";
import { AsteriskIcon } from "lucide-react";
import { useTextBox } from "./useTextBox";
import React from "react";
import "./TextBox.scss";

const TextBox = (props: TextBoxProps) => {
  const { isAttributeValuePresent, handleOnChange } = useTextBox(props);
  const {
    id,
    name,
    label = "",
    required = false,
    placeholder = "",
    classNames = "",
    type = "text",
    refs,
    onKeyDown,
    isDisabled = false,
    value = "",
  } = props;

  return (
    <div className="textbox">
      {label && (
        <div className="mb-2 label d-flex">
          {label}
          {required && (<sup>{<AsteriskIcon color="red" className="required-icon-size mt-2" />}</sup>)}
        </div>
      )}
      <input
        type={type}
        placeholder={`${placeholder}`}
        className={`textbox ${classNames} ${isDisabled ? "disabled" : ""}`}
        required={required}
        value={value}
        onChange={(e) => handleOnChange(e.target.value.trimStart())}
        onKeyDown={onKeyDown}
        ref={refs}
        disabled={isDisabled}
        {...isAttributeValuePresent("id", id)}
        {...isAttributeValuePresent("name", name)}
      />
    </div>
  );
};

export { TextBox, TextBoxTypes };
