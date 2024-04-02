interface ItemsType {
  label: string;
  value: string;
}

interface DropdownProps {
  label?: string;
  items: ItemsType[];
  placeholder: string;
  selectedValue?: string;
  onValueChange: any;
  isSearch?: boolean;
}

export { DropdownProps };
