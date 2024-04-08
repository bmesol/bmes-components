import { useEffect, useState } from "react";
import { TextareaProps } from "./DTOs";

const useTextarea = (props: TextareaProps) => {
  const { value = "", onChange } = props;
  const [input, setInput] = useState<string>(value);

  useEffect(() => {
    if (onChange) {
      onChange(input);
    }
  }, [input]);

  const handleOnChange = (inputValue: string) => {
    setInput(inputValue);
  };

  return { input, handleOnChange };
};

export { useTextarea };
