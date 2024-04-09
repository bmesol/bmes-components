enum TextBoxTypes {
  TEXT = "text",
  PASSWORD = "password",
}

interface TextBoxProps {
  label?: string;
  type?: TextBoxTypes;
  regex?: string;
  length?: number;
  required?: boolean;
  placeholder?: string;
  classNames?: string;
  value: string;
  onChange: Function;
  refs?: any;
  onKeyDown?: any;
}

export { TextBoxTypes, TextBoxProps };