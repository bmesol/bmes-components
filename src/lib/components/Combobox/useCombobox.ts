import React, { useEffect, useState } from "react";
import { ComboboxProps } from "./DTOs";

const useCombobox = (props: ComboboxProps) => {
  const { items, selectedValue, onValueChange, onCreate, onSearch } = props;

  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [value, setValue] = useState(selectedValue || "");
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    if (onValueChange) {
      onValueChange(value);
    }
    if (onSearch) {
      onSearch(searchString);
    }
  }, [value, searchString]);

  const handleOnOpenChange = () => {
    setOpen(!open);
    setSearchString("");
    setHover(false);
  };

  const filteredItems = items?.filter((item) => item.label.toLowerCase().includes(searchString.trim().toLowerCase()));

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    setOpen(false);
    setSearchString("");
  };

  const handleCreate = () => {
    if (onCreate) {
      onCreate(searchString);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value.trimStart());
  }

  return {
    open,
    handleOnOpenChange,
    value,
    searchString,
    setSearchString,
    filteredItems,
    handleValueChange,
    hover,
    setHover,
    handleCreate,
    handleSearch,
  };
};

export { useCombobox };
