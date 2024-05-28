import { TextBoxTypes, TextBoxProps } from "./DTOs";
import { useTextBox } from "./useTextBox";
import React from "react";
import "./TextBox.scss";

const TextBox = (props: TextBoxProps) => {
  const { input, handleOnChange } = useTextBox(props);
  const { label = "", required = false, placeholder = "", classNames = "", type = "text", refs, onKeyDown, isDisabled = false } = props;

  return (
    <div className="textbox">
      {label && <div className="mb-2 label">{label}</div>}
      <input
        type={type}
        placeholder={`${placeholder}`}
        className={`textbox ${classNames} ${isDisabled ? "disabled" : ""}`}
        required={required}
        value={input}
        onChange={(e)=>handleOnChange(e.target.value.trimStart())}
        onKeyDown={onKeyDown}
        ref={refs}
        disabled={isDisabled}
      />
    </div>
  );
};

export { TextBox, TextBoxTypes };