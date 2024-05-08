import { Popover, PopoverContent, PopoverTrigger } from "../../shared/components/Popover/Popover";
import { Button } from "../../shared/components/Button/Button";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import { Label, LabelVariants, Badge } from "../../../lib";
import { cn } from "../../shared/components/DTOs";
import { useEffect, useState } from "react";
import { DropdownProps } from "./DTOs";
import React from "react";
import "./Combobox.scss";

const Combobox = (props: DropdownProps) => {
  const { label, items, placeholder = "Select", selectedValue, onValueChange, showCreateButton = true, createButton } = props;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(selectedValue || "");
  const [searchString, setSearchString] = useState("");

  const handleOnOpenChange = () => {
    setOpen(!open);
    setSearchString("");
  };

  const filteredItems = items.filter((item) => item.label.toLowerCase().includes(searchString.trim().toLowerCase()));

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    setOpen(false);
    setSearchString("");
  };

  useEffect(() => {
    if (onValueChange) {
      onValueChange(value);
    }
  }, [value]);

  return (
    <>
      {label && ( <Label label={label} variant={LabelVariants.DEFAULT} classNames="text-black mb-2" /> )}
      <Popover open={open} onOpenChange={handleOnOpenChange}>
        <PopoverTrigger asChild>
          <Button variant="outline" aria-expanded={open} className="w-100 justify-between">
            {value ? items.find((item) => item.value === value)?.label : placeholder}
            <ChevronsUpDown className="shrink-0 chevrons-up-down-icon" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-100 combobox">
          <>
            <div className="d-flex align-items-center m-1">
              <Search className="ms-2 text-secondary search-icon" />
              <input
                type="text"
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
                placeholder="Search here"
                className="w-100 px-2 py-2 bg-transparent focus:outline-none opacity-100"
              />
            </div>
            <div className={cn("border-theme1 border-t mb-1")}></div>
            {showCreateButton && filteredItems.length === 0 ? (
              <div className="items justify-content-between px-3 py-1" onClick={createButton}>
                <Label variant={LabelVariants.SECONDARY} label={`"${searchString}"`} classNames="ms-3 me-2" />
                <Badge label="New" />
              </div>
            ) : filteredItems.length === 0 ? (
              <div className="px-3 py-2 no-items">No item found.</div>
            ) : (
              filteredItems.map((item) => (
                <div
                  key={item.value}
                  onClick={() => handleValueChange(item.value)}
                  className={`${value === item.value && "selected-item"} ${!value && "combobox-content"} items ps-2 pe-4 py-1`}
                >
                  <Check className={cn("tick-icon me-1", value === item.value ? "opacity-100" : "opacity-0")} />
                  <Label variant={LabelVariants.DEFAULT} label={item.label} />
                </div>
              ))
            )}
          </>
        </PopoverContent>
      </Popover>
    </>
  );
};

export { Combobox };
