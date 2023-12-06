import { useState, useRef, ChangeEvent } from "react";
import { PinProps } from "./DTOs";

const usePinInput = ({ length }: PinProps) => {
  const [pinValues, setPinValues] = useState<string[]>(Array(length).fill(""));
  const elemRefs = pinValues.map(() => useRef<HTMLInputElement>(null));

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newPinValues = [...pinValues];
    newPinValues[index] = e.target.value;
    setPinValues(newPinValues);
  };

  return { pinValues, elemRefs, handleInputChange };
};

export { usePinInput };