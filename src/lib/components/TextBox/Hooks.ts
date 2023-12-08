import { useState } from "react";
import { TextBoxProps } from "./DTOs";

const useTextBox = (prop: TextBoxProps) => {
  const { regex = "", length = 0, value = "", onChange } = prop;
  const [input, setInput] = useState<string>(value);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    let regexObj = new RegExp(regex);
    const isValidInput = regexObj.test(inputValue);

    const validateLength = length != 0 ? length >= inputValue.length : true;

    if (isValidInput && validateLength) {
      setInput(inputValue);
    }

    onChange(input);
  };

  return { input, handleOnChange };
};

export { useTextBox };