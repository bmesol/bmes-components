enum Directions {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}

interface ItemsType {
  label: string;
  value: string;
}

interface RadioProps {
  label?: string;
  items: ItemsType[];
  direction?: Directions;
  selectedValue?: string;
  onValueChange: any;
  isDisabled?: boolean;
  classNames?: string;
  required?: boolean;
}

export { RadioProps, Directions };
