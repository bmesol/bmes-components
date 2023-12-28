import React from "react";
import { TextBoxType, TextBoxProps } from "./DTOs";
import { useTextBox } from "./Hooks";
import "./TextBox.scss";

const TextBox = (props: TextBoxProps) => {
  const { input, handleOnChange } = useTextBox(props);
  const { label = "", required = false, placeholder = "", classNames = "", type = "text" } = props;

  return (
    <div className="textbox">
      {label && <div className="mb-2 label">{label}</div>}
      <input
        type={type}
        placeholder={`${placeholder}`}
        className={`textbox ${classNames}`}
        required={required}
        value={input}
        onChange={handleOnChange}
      />
    </div>
  );
};

export { TextBox, TextBoxType };