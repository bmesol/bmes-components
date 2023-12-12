import React from "react";
import { TextBoxProps } from "./DTOs";
import { useTextBox } from "./Hooks";
import "./TextBox.scss";

const TextBox = (prop: TextBoxProps) => {
  const { input, handleOnChange } = useTextBox(prop);
  const { label = "", required = false, placeholder = "", classNames = "",} = prop;

  return (
    <div className="textbox">
      {label && <div className="mb-2 label">{label}</div>}
      <input
        type={"text"}
        placeholder={`${placeholder}`}
        className={`${classNames}`}
        required={required}
        value={input}
        onChange={handleOnChange}
      />
    </div>
  );
};

export { TextBox };