enum TextBoxTypes {
  TEXT = "text",
  PASSWORD = "password",
}

interface TextBoxProps {
  id?: string;
  name?: string;
  label?: string;
  type?: TextBoxTypes;
  regex?: string;
  length?: number;
  required?: boolean;
  placeholder?: string;
  classNames?: string;
  value: string;
  onChange: Function;
  isDisabled?: boolean;
  refs?: any;
  onKeyDown?: any;
}

export { TextBoxTypes, TextBoxProps };
