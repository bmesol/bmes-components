import { ToastProvider } from "../../../lib/components/Toast/Toast";
import { useIcon } from "./useIcon";
import { IconProps } from "./DTOs";
import React from "react";

const Icon = ({ src, name }: IconProps) => {
  const Icons = () => {
    const { copyToClipboard } = useIcon({ name });
    return (
      <div className="my-3 text-center" style={{ cursor: "pointer" }} title="Copy to clipboard" onClick={copyToClipboard}>
        <div className="d-flex align-items-center justify-content-center">
          {src}
        </div>
        <p className="mt-2">{name}</p>
      </div>
    );
  };
  return (
    <ToastProvider>
      <Icons />
    </ToastProvider>
  );
};

export { Icon };
