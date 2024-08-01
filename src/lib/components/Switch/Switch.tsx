import { Switch as SharedSwitch } from "../../shared/components/Switch/Switch";
import { AsteriskIcon } from "lucide-react";
import { SwitchProps } from "./DTOs";
import React from "react";

const Switch = (props: SwitchProps) => {
  const { label, checked, onCheckedChange, isDisabled, classNames = "", required = false } = props;
  return (
    <>
      <div className={classNames}>
        {label && <div className="mb-2 label d-flex">{label}{required && <sup>{<AsteriskIcon color="red" className="required-icon-size mt-2" />}</sup>}</div>}
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
