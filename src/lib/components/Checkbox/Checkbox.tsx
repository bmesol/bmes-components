import { Checkbox as SharedCheckbox } from "../../shared/components/Checkbox/Checkbox";
import { CheckboxProps } from "./DTOs";
import React from "react";
import "./Checkbox.scss";

const Checkbox = (props: CheckboxProps) => {
  const { id, label, checked, onCheckedChange, isDisabled, classNames = "" } = props;
  return (
    <>
      <div className={`${classNames}`}>
        <div className="flex space-x-2 checkbox">
          <SharedCheckbox
            id={id}
            checked={checked}
            onCheckedChange={onCheckedChange}
            disabled={isDisabled}
          />
          <div className="grid gap-1.5 leading-none">
            <label htmlFor={id} className={`${isDisabled ? "disabled" : ""}`}>
              {label}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export { Checkbox };
