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
  onSearch?: Function;
  onCreate?: Function;
}

export { ComboboxProps, ItemsType };
