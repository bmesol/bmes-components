import { Checkbox as SharedCheckbox } from "../../shared/components/Checkbox/Checkbox";
import { CheckboxProps, Directions } from "./DTOs";
import { useCheckbox } from "./useCheckbox";
import React from "react";
import "./Checkbox.scss";

const Checkbox = (props: CheckboxProps) => {
  const { items, direction, selectedValues = [], onCheckedChange, isDisabled, classNames = "" } = props;
  const { handleCheckedChange } = useCheckbox({ selectedValues, onCheckedChange });
  return (
    <>
      <div className={`${classNames} ${direction}`}>
        {items.map((item) => (
          <div key={item.value} className="flex space-x-2 checkbox mt-3 me-3">
            <SharedCheckbox
              id={item.value}
              onCheckedChange={(checked: boolean) => handleCheckedChange(item.value, checked)}
              defaultChecked={selectedValues.includes(item.value)}
              disabled={isDisabled}
            />
            <div className="grid gap-1.5 leading-none">
              <label htmlFor={item.value} className={`${isDisabled ? "disabled" : ""}`}>
                {item.label}
              </label>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export { Checkbox };
