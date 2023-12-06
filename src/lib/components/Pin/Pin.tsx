import React, { useRef, useState } from "react";
import { TextBox } from "../TextBox/TextBox";
import { usePinInput } from "./Hooks";
import { PinProps } from "./DTOs";
import "./Pin.scss";

const Pin = ({ length, classNames = "", required = false }: PinProps) => {
  const { pinValues, elemRefs, handleInputChange } = usePinInput({ length });

  return (
    <div className="pin-component">
      <div className="mb-2 label">Pin</div>
      <div className="pin-input">
        {elemRefs.map((ref, index) => (
          <TextBox
            key={index}
            name="Pin"
            type="password"
            className={`pin-input-field text-center ${classNames}`}
            regex="^\d+$"
            maxLength={1}
            placeholder="*"
            required={required}
            ref={ref}
            value={pinValues[index]}
            onChange={(e) => handleInputChange(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

export { Pin };