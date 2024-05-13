interface ItemsType {
  label: string;
  value: string;
}

interface DropdownProps {
  label?: string;
  items?: ItemsType[];
  placeholder?: string;
  selectedValue?: string;
  onValueChange?: any;
  showCreateButton?: boolean;
  onCreate?: React.MouseEventHandler<HTMLDivElement>;
}

export { DropdownProps };
