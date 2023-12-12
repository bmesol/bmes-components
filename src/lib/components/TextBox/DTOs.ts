interface TextBoxProps {
  label?: string;
  regex?: string;
  length?: number;
  required?: boolean;
  placeholder?: string;
  classNames?: string;
  value: string;
  onChange: (newValue: string) => void;
}

export { TextBoxProps };