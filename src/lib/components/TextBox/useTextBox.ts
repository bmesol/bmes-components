import { TextBoxProps } from "./DTOs";

const useTextBox = (props: TextBoxProps) => {
  const { regex = "", length = 0, onChange } = props;

  const isAttributeValuePresent = (attributeName: string, attributeValue: string | undefined) =>
    (attributeValue ? { [attributeName]: attributeValue } : {});

  const handleOnChange = (inputValue: string) => {
    let regexObj = new RegExp(regex);

    const isValidInput = regexObj.test(inputValue);
    const validateLength = length !== 0 ? length >= inputValue.length : true;

    if (isValidInput && validateLength) {
      if (onChange) onChange(inputValue);
    }
  };

  return { isAttributeValuePresent, handleOnChange };
};

export { useTextBox };
