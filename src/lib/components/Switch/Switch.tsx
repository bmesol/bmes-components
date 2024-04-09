import { Switch as SharedSwitch } from "../../shared/components/Switch/Switch";
import { SwitchProps } from "./DTOs";
import React from "react";

const Switch = (props: SwitchProps) => {
  const { label, checked, onCheckedChange, isDisabled, classNames = "" } = props;
  return (
    <>
      <div className={classNames}>
        {label && <div className="mb-2">{label}</div>}
        <SharedSwitch
          checked={checked}
          onCheckedChange={onCheckedChange}
          disabled={isDisabled}
        />
      </div>
    </>
  );
};

export { Switch };
