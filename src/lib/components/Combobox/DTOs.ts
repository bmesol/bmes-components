interface ItemsType {
  label: string;
  value: string;
}

interface ComboboxProps {
  label?: string;
  items?: ItemsType[];
  placeholder?: string;
  selectedValue?: string;
  onValueChange?: any;
  showCreateButton?: boolean;
  onCreate?: Function;
}

export { ComboboxProps, ItemsType };
