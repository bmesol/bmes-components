import { useState } from "react";
import { PinProps } from "./DTOs";

const usePin = (props: PinProps) => {
  const { value = "", onChange } = props;
  const [pin, setPin] = useState<string>(value);

  const handleTextBoxChange = (index: number) => (value: string) => {
    const newPin = pin.substring(0, index) + value + pin.substring(index + 1);
    setPin(newPin);
    () => onChange(pin);
  };
  return { pin, handleTextBoxChange };
};

export { usePin };