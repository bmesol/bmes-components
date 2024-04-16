import { RadioGroup, RadioGroupItem } from "../../shared/components/RadioGroup/RadioGroup";
import { RadioProps, Directions } from "./DTOs";
import React from "react";
import "./Radio.scss";

const Radio = (props: RadioProps) => {
  const { label, items, direction, selectedValue, onValueChange, classNames = "", isDisabled = false } = props;
  return (
    <>
      <div>
        {label && <div className="mb-2 label">{label}</div>}
        <RadioGroup
          defaultValue={selectedValue}
          onValueChange={onValueChange}
          className={`${direction} ${classNames} ${isDisabled ? "disabled" : ""}`}
          disabled={isDisabled}
        >
          {items.map((item) => (
            <div key={item.value} className={`flex items-center space-x-2 radio`}>
              <RadioGroupItem value={item.value} id={item.value} />
              <label htmlFor={item.value}>{item.label}</label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </>
  );
};

export { Radio, Directions };
