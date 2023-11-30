import React from "react";
import { TextBoxProps } from "./DTOs";
import { useTextBox } from "./Hooks";
import "./TextBox.css";

const TextBox = (prop: TextBoxProps) => {
  const { inputValue, handleOnChange } = useTextBox(prop);
  const {
    label = "",
    required = false,
    placeholder = "",
    classNames = "",
  } = prop;

  return (
    <div className="textbox">
      {label && <div className="mb-2 label">{label}</div>}
      <input
        type={"text"}
        placeholder={`${placeholder}`}
        className={`${classNames}`}
        required={required}
        value={inputValue}
        onChange={handleOnChange}
      />
    </div>
  );
};

export { TextBox };