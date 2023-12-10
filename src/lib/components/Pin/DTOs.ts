interface PinProps {
  label?: string;
  length: number;
  required?: boolean;
  value: string;
  onChange: (newValue: string) => void;
}

export { PinProps };