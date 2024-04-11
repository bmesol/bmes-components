interface ItemsType {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  items: ItemsType[];
  selectedValue?: string;
  onValueChange: any;
  placeholder?: string;
  isDisabled?: boolean;
}

export { SelectProps };
