import React from "react";
import { TextBox } from "./../TextBox/TextBox";
import { PinProps } from "./DTOs";
import { usePin } from "./Hooks";
import { TextBoxType } from "../TextBox/DTOs";
import "./Pin.scss";

const Pin = (props: PinProps) => {
  const { label = "", length = 0, required = false } = props;
  const { pin, handleTextBoxChange } = usePin(props);
  return (
    <>
      <div className="mb-2 label">{label}</div>
      <div className="d-flex">
        {Array.from({ length }, (_, index) => (
          <TextBox
            key={index}
            type={TextBoxType.PASSWORD}
            value={pin[index]}
            classNames="pin-input-field text-center"
            onChange={handleTextBoxChange(index)}
            placeholder="*"
            length={1}
            regex="^\d*$"
            required={required}
          />
        ))}
      </div>
    </>
  );
};

export { Pin };