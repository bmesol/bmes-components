interface PinProps {
  length: number;
  label?: string;
  value: string;
  onChange: Function;
  isDisabled?: boolean;
  required?: boolean;
}

export { PinProps };