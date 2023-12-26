import { useState } from "react";
import { PinProps } from "./DTOs";

const usePin = (props: PinProps) => {
  const { value = new Array(length).fill(""), onChange } = props;
  const [pin, setPin] = useState<string[]>(value);

  const handleTextBoxChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newPin = [...pin];
      newPin[index] = e.target.value;
      setPin(newPin);
      if (onChange) {
        onChange(e, index);
      }
    };
  return { pin, handleTextBoxChange };
};

export { usePin };