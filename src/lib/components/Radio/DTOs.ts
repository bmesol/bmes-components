enum Directions {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}

interface ItemsType {
  label: string;
  value: string;
}

interface RadioProps {
  items: ItemsType[];
  direction: Directions;
  selectedValue?: string;
  onValueChange: any;
  classNames?: string;
}

export { RadioProps, Directions };
