import { useEffect, useState } from "react";
import { PinProps } from "./DTOs";

const usePin = (props: PinProps) => {
  const { value = "", onChange } = props;
  const [pin, setPin] = useState<string>(value);

  useEffect(() => {
    if (onChange) {
      onChange(pin);
    }
  }, [pin]);

  const handleTextBoxChange = (index: number) => (value: string) => {
    const newPin = pin.split("");
    newPin[index] = value;
    setPin(newPin.join(""));
  };
  return { pin, handleTextBoxChange };
};

export { usePin };