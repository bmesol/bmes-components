enum Directions {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}

interface ItemsType {
  label: string;
  value: string;
}

interface CheckboxProps {
  items: ItemsType[];
  direction?: Directions;
  selectedValues?: string[];
  onCheckedChange: (currentSelectedValues: string[]) => void;
  isDisabled?: boolean;
  classNames?: string;
}

interface UseCheckboxProps {
  selectedValues: string[];
  onCheckedChange: any;
}

export { CheckboxProps, UseCheckboxProps, Directions };
