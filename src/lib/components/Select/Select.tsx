import { Select as SharedSelect, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../shared/components/Select/Select";
import { AsteriskIcon } from "lucide-react";
import { SelectProps } from "./DTOs";
import React from "react";
import "./Select.scss";

const Select = (props: SelectProps) => {
  const { label, items, selectedValue, onValueChange, placeholder, isDisabled = false, classNames = "", required = false } = props;
  return (
    <>
      {label && <div className="mb-2 label d-flex">{label}{required && <sup>{<AsteriskIcon color="red" className="required-icon-size mt-1" />}</sup>}</div>}
      <SharedSelect onValueChange={onValueChange} defaultValue={selectedValue} disabled={isDisabled}>
        <SelectTrigger className={`w-100 select ${classNames}`}>
          <SelectValue placeholder={`${placeholder || "Select"}`} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item.value} className="select-item" value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </SharedSelect>
    </>
  );
};

export { Select };
