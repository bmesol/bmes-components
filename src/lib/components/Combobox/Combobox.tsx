import { Popover, PopoverContent, PopoverTrigger } from "../../shared/components/Popover/Popover";
import { Button } from "../../shared/components/Button/Button";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import { Label, LabelVariants, Badge } from "../../../lib";
import React, { useEffect, useState } from "react";
import { DropdownProps } from "./DTOs";
import "./Combobox.scss";

const Combobox = (props: DropdownProps) => {
  const { label, items, placeholder = "Select", selectedValue, onValueChange, showCreateButton = true, onCreate } = props;

  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [value, setValue] = useState(selectedValue || "");
  const [searchString, setSearchString] = useState("");

  const handleOnOpenChange = () => {
    setOpen(!open);
    setSearchString("");
    setHover(false);
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
            <ChevronsUpDown className="chevrons-up-down-icon" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-100 combobox">
          <>
            <div className="d-flex align-items-center m-1">
              <Search className="ms-2 search-icon" />
              <input
                type="text"
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
                placeholder="Search here"
                className="w-100 px-2 py-2 bg-transparent focus:outline-none opacity-100"
              />
            </div>
            <div className="border-theme1 border-t mb-1"></div>
            {!showCreateButton && filteredItems.length === 0 ? (
              <Label label="No item found." variant={LabelVariants.DEFAULT} classNames="px-3 py-2" />
            ) : (
              <>
                {filteredItems.map((item) => (
                  <div
                    key={item.value}
                    onClick={() => handleValueChange(item.value)}
                    className={`${(value === item.value && !hover) && "selected-item"} combobox-content items ps-2 pe-4 py-1`}
                    onMouseEnter={() => setHover(true)}
                  >
                    <Check className={`tick-icon me-1 ${value === item.value ? "opacity-100" : "opacity-0"}`} />
                    <Label variant={LabelVariants.DEFAULT} label={item.label} />
                  </div>
                ))}
                {showCreateButton && searchString && !filteredItems.some((item) => item.label === searchString) && (
                  <div className="items justify-content-between px-3 py-1 combobox-content" onClick={onCreate}>
                    <Label variant={LabelVariants.SECONDARY} label={`"${searchString}"`} classNames="ms-3 me-2" />
                    <Badge label="New" />
                  </div>
                )}
              </>
            )}
          </>
        </PopoverContent>
      </Popover>
    </>
  );
};

export { Combobox };
