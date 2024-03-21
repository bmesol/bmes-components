import { Textarea as SharedTextarea } from "../../shared/components/Textarea/Textarea";
import { useTextarea } from "./useTextarea";
import { TextareaProps } from "./DTOs";
import React from "react";
import "./Textarea.scss";

const Textarea = (props: TextareaProps) => {
  const { input, handleOnChange } = useTextarea(props);
  const { label, length, placeholder, isDisabled, classNames = "" } = props;
  return (
    <>
      <div className={classNames}>
        {label && <div className="mb-2">{label}</div>}
        <div className="position-relative">
          <SharedTextarea
            maxLength={length}
            value={input}
            onChange={(e) => handleOnChange(e.target.value)}
            placeholder={placeholder}
            disabled={isDisabled}
            className="textarea resize-none"
          />
          <div className="text-count">
            <span>{input.length}</span>/<span>{length}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export { Textarea };
