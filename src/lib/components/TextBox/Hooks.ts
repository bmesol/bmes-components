import { useState } from "react";
import { TextBoxProps } from "./DTOs";

const useTextBox = (prop: TextBoxProps) => {
  const { regex = "", length = 0 } = prop;
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInputValue = e.target.value;

    // Check if the input matches the regex pattern
    let regexObj = new RegExp(regex);
    const isValidInput = regexObj.test(userInputValue);

    // Update the state with the input value and validation result
    const validateLength = length != 0 ? length >= userInputValue.length : true;

    if (isValidInput && validateLength) {
      setInputValue(userInputValue);
    }
  };

  return {
    inputValue,
    handleOnChange,
  };
};

export { useTextBox };