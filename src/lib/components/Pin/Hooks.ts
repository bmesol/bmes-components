import { useState } from "react";

const usePins = () => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInputValue = e.target.value;

    // Check if the input matches the regex pattern
    let pinRegex = /^\d*$/;
    const isValidInput = pinRegex.test(userInputValue);

    if (isValidInput) {
      setInputValue(userInputValue);
    }
  };

  return {
    inputValue,
    handleOnChange,
  };
};

export { usePins };