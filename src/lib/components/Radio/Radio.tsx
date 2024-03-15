import { RadioGroup as GroupRadio, RadioGroupItem } from "../../shared/components/RadioGroup/RadioGroup";
import { RadioGroupProps, RadioProps } from "./DTOs";
import React from "react";
import "./Radio.scss";

const RadioGroup = (props: RadioGroupProps) => {
  const { defaultValue, onValueChange, children, classNames = "" } = props;
  return (
    <>
      <GroupRadio defaultValue={defaultValue} onValueChange={onValueChange} className={classNames}>
        {children}
      </GroupRadio>
    </>
  );
};

const Radio = (props: RadioProps) => {
  const { id, value, label, classNames = "" } = props;
  return (
    <>
      <div className={`${classNames}`}>
        <div className="flex items-center space-x-2 radio">
          <RadioGroupItem value={value} id={id} />
          <label htmlFor={id}>{label}</label>
        </div>
      </div>
    </>
  );
};

export { RadioGroup, Radio };
