import { Popover, PopoverContent, PopoverTrigger } from "../../shared/components/Popover/Popover";
import { Button } from "../../shared/components/Button/Button";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import { cn } from "../../shared/components/DTOs";
import { useEffect, useState } from "react";
import { DropdownProps } from "./DTOs";
import React from "react";

const Dropdown = (props: DropdownProps) => {
  const { label, items, placeholder, selectedValue, onValueChange, isSearch } = props;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(selectedValue || "");
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleValueChange = (newValue: any) => {
    setValue(newValue === value ? "" : newValue);
    setOpen(false);
    setSearchTerm("");
  };

  useEffect(() => {
    if (onValueChange) {
      onValueChange(value);
    }
  }, [value]);

  return (
    <>
      {label && <div className="mb-2">{label}</div>}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-100 justify-between"
          >
            {value ? items.find((item) => item.value === value)?.label : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <>
            {isSearch && (
              <div className="d-flex align-items-center border-b m-1">
                <Search className="ms-2 text-secondary" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..."
                  className="w-100 px-2 py-2 bg-transparent focus:outline-none"
                />
              </div>
            )}
            {filteredItems.length === 0 ? (
              <div className="px-3 py-2 text-gray-500">No item found.</div>
            ) : (
              filteredItems.map((item) => (
                <div
                  key={item.value}
                  onClick={() => handleValueChange(item.value)}
                  className="d-flex justify-content-between align-items-center px-3 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {item.label}
                  <Check className={cn("ml-4 h-4 w-4", value === item.value ? "opacity-100" : "opacity-0")} />
                </div>
              ))
            )}
          </>
        </PopoverContent>
      </Popover>
    </>
  );
};

export { Dropdown };
