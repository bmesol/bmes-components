import { TextBox } from "./../TextBox/TextBox";
import { TextBoxTypes } from "../TextBox/DTOs";
import { AsteriskIcon } from "lucide-react";
import { PinProps } from "./DTOs";
import { usePin } from "./usePin";
import React from "react";
import "./Pin.scss";

const Pin = (props: PinProps) => {
  const { label = "", length = 0, required = false, isDisabled = false } = props;
  const { pin, handleTextBoxChange, handleBackspace, handlePaste, inputRefs, isDisabledInput } = usePin(props);

  return (
    <>
      {label && (
        <div className="mb-2 label d-flex">
          {label}
          {required && (
            <sup>
              <AsteriskIcon color="red" className="required-icon-size mt-2" />
            </sup>
          )}
        </div>
      )}
      <div className="d-flex justify-content-between pin" onPaste={handlePaste}>
        {Array.from({ length }, (_, index) => (
          <TextBox
            key={index}
            refs={(el: HTMLInputElement | null) => (inputRefs.current[index] = el)}
            type={TextBoxTypes.PASSWORD}
            value={pin[index] || ""}
            classNames="text-center"
            onChange={handleTextBoxChange(index)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleBackspace(index, e)}
            placeholder="*"
            length={1}
            regex="^\d*$"
            required={required}
            isDisabled={isDisabled ? isDisabled : isDisabledInput(index)}
          />
        ))}
      </div>
    </>
  );
};

export { Pin };
