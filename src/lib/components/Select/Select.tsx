import { Select as SharedSelect, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../shared/components/Select/Select";
import { Label, LabelVariants } from "../../index";
import { SelectProps } from "./DTOs";
import React from "react";
import "./Select.scss";

const Select = (props: SelectProps) => {
  const { label, items, selectedValue, onValueChange, placeholder, isDisabled = false } = props;
  return (
    <>
      {label && ( <Label label={label} variant={LabelVariants.DEFAULT} classNames="text-black mb-2" /> )}
      <SharedSelect onValueChange={onValueChange} defaultValue={selectedValue} disabled={isDisabled}>
        <SelectTrigger className="w-100 select">
          <SelectValue placeholder={`${placeholder || "Select"}`} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem className="select-item" value={item.label}>
                {item.value}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </SharedSelect>
    </>
  );
};

export { Select };
