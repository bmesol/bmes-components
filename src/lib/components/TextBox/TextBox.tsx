import React from "react";
import { TextBoxProps } from "./DTOs";
import { useTextBox } from "./Hooks";
import "./TextBox.scss";

const TextBox = (prop: TextBoxProps) => {
  const { inputValue, handleOnChange } = useTextBox(prop);
  const {
    label = "",
    required = false,
    placeholder = "",
    classNames = "",
    ...rest
  } = prop;

  return (
    <div className="textbox">
      {label && <div className="mb-2 label">{label}</div>}
      <input
        type={"text"}
        name="TextBox Input"
        placeholder={`${placeholder}`}
        className={`${classNames}`}
        required={required}
        value={inputValue}
        onChange={handleOnChange}
        {...rest}
      />
    </div>
  );
};

export { TextBox };