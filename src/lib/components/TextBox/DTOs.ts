enum TextBoxType {
  TEXT = "text",
  PASSWORD = "password",
}

interface TextBoxProps {
  label?: string;
  type?: TextBoxType;
  regex?: string;
  length?: number;
  required?: boolean;
  placeholder?: string;
  classNames?: string;
  value: string;
  onChange: Function;
  refs?: any
  onKeyDown?: any
}

export { TextBoxType, TextBoxProps };