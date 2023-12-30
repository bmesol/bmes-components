import React from "react";
import { TextBox } from "./../TextBox/TextBox";
import { PinProps } from "./DTOs";
import { usePin } from "./Hooks";
import { TextBoxType } from "../TextBox/DTOs";
import "./Pin.scss";

const Pin = (props: PinProps) => {
  const { label = "", length = 0, required = false } = props;
  const { pin, handleTextBoxChange, handleBackspace, inputRefs } = usePin(props);
  return (
    <>
      {label && <div className="mb-2 label">{label}</div>}
      <div className="d-flex justify-content-between pin">
        {Array.from({ length }, (_, index) => (
          <TextBox
            key={index}
            refs={(ref: any) => (inputRefs.current[index] = ref)}
            type={TextBoxType.PASSWORD}
            value={pin[index]}
            classNames="text-center"
            onChange={handleTextBoxChange(index)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleBackspace(index, e)}
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