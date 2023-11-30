import React, { useRef } from "react";
import { PinProps } from "./DTOs";
import { usePins } from "./Hooks";
import "./Pin.css";

const Pin = ({
  label,
  length,
  placeholder,
  classNames = "",
  required = false,
}: PinProps) => {
  const { inputValue, handleOnChange } = usePins();
  const elemRefs = Array.from({ length }, () => useRef<HTMLInputElement>(null));

  return (
    <div className="pin">
      {label && <div className="mb-2 label">{label}</div>}
      {elemRefs.map((ref) => (
        <input
          type={"password"}
          className={`pin text-center ${classNames}`}
          maxLength={1}
          placeholder={placeholder}
          required={required}
          ref={ref}
          value={inputValue}
          onChange={handleOnChange}
        />
      ))}
    </div>
  );
};

export { Pin };