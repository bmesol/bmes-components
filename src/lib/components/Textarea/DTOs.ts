interface TextareaProps {
  label?: string;
  length: number;
  value: string;
  onChange: Function;
  placeholder?: string;
  isDisabled?: boolean;
  classNames?: string;
}

export { TextareaProps };
