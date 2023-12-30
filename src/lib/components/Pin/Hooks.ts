import { useEffect, useRef, useState } from "react";
import { PinProps } from "./DTOs";

const usePin = (props: PinProps) => {
  const { value = "", onChange, length } = props;
  const [pin, setPin] = useState<string>(value);

  const inputRefs = useRef<Array<HTMLInputElement>>(new Array(length).fill(""));

  useEffect(() => {
    if (onChange) {
      onChange(pin);
    }
  }, [pin]);

  const handleBackspace = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && index > 0 && !pin[index]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleTextBoxChange = (index: number) => (value: string) => {
    const newPin = pin.split("");
    newPin[index] = value;
    const allPins = newPin.join("");
    setPin(allPins);
    if (allPins.length <= length) {
      inputRefs.current.forEach((ref, index) => {
        if (ref) {
          ref.value = allPins[index] || "";
        }
      });
    }
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };
  return { pin, handleTextBoxChange, handleBackspace, inputRefs };
};

export { usePin };