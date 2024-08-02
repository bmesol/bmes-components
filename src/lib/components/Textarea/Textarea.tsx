import { Textarea as SharedTextarea } from "../../shared/components/Textarea/Textarea";
import { useTextarea } from "./useTextarea";
import { AsteriskIcon } from "lucide-react";
import { TextareaProps } from "./DTOs";
import React from "react";
import "./Textarea.scss";

const Textarea = (props: TextareaProps) => {
  const { input, handleOnChange } = useTextarea(props);
  const { label, length, placeholder, isDisabled, classNames = "", required = false } = props;
  return (
    <>
      <div className={classNames}>
        {label && <div className="mb-2 label d-flex">{label}{required && <sup>{<AsteriskIcon color="red" className="required-icon-size mt-2" />}</sup>}</div>}
        <div className="position-relative">
          <SharedTextarea
            maxLength={length}
            value={input}
            onChange={(e) => handleOnChange(e.target.value.trimStart())}
            placeholder={placeholder}
            disabled={isDisabled}
            className="textarea resize-none"
          />
          <div className={`text-count ${isDisabled ? "disabled" : ""}`}>
            <span>{input.length}</span>/<span>{length}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export { Textarea };
