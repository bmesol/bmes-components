import React from "react";
import { TextBoxTypes, TextBoxProps } from "./DTOs";
import { useTextBox } from "./useTextBox";
import "./TextBox.scss";

const TextBox = (props: TextBoxProps) => {
  const { input, handleOnChange } = useTextBox(props);
  const { label = "", required = false, placeholder = "", classNames = "", type = "text", refs, onKeyDown } = props;

  return (
    <div className="textbox">
      {label && <div className="mb-2 label">{label}</div>}
      <input
        type={type}
        placeholder={`${placeholder}`}
        className={`textbox ${classNames}`}
        required={required}
        value={input}
        onChange={(e)=>handleOnChange(e.target.value)}
        onKeyDown={onKeyDown}
        ref={refs}
      />
    </div>
  );
};

export { TextBox, TextBoxTypes };