import { useEffect, useState } from "react";
import { TextBoxProps } from "./DTOs";

const useTextBox = (props: TextBoxProps) => {
  const { regex = "", length = 0, value = "", onChange } = props;
  const [input, setInput] = useState<string>(value);

  useEffect(() => {
    if (onChange) {
      onChange(input);
    }
  }, [input]);

  const handleOnChange = (inputValue: string) => {
    
    let regexObj = new RegExp(regex);
    const isValidInput = regexObj.test(inputValue);

    const validateLength = length != 0 ? length >= inputValue.length : true;

    if (isValidInput && validateLength) {
      setInput(inputValue);
    }
  };

  return { input, handleOnChange };
};

export { useTextBox };