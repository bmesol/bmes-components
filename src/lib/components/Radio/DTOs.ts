interface RadioGroupProps {
  defaultValue?: string;
  onValueChange: any;
  children: React.ReactNode;
  classNames?: string;
}

interface RadioProps {
  id: string;
  value: string;
  label: string;
  classNames?: string;
}

export { RadioGroupProps, RadioProps };
