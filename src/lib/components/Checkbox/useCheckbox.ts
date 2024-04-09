import { useEffect, useState } from "react";
import { UseCheckboxProps } from "./DTOs";

const useCheckbox = ({ selectedValues, onCheckedChange }: UseCheckboxProps) => {
  const [currentValues, setCurrentValues] = useState<string[]>(selectedValues);

  useEffect(() => {
    if (onCheckedChange) {
      onCheckedChange(currentValues);
    }
  }, [currentValues]);

  const handleCheckedChange = (value: string, checked: boolean) => {
    const updatedValues = checked ? [...currentValues, value] : currentValues.filter((item) => item !== value);
    setCurrentValues(updatedValues);
  };
  return {
    handleCheckedChange,
  };
};

export { useCheckbox };
