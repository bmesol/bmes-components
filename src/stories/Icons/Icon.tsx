import { IconProps } from "./DTOs";
import { useIcon } from "./useIcon";
import React from "react";

const Icon = ({ src, name }: IconProps) => {
  const { copyToClipboard } = useIcon({name});
  return (
    <div
      onClick={copyToClipboard}
      className="my-3 text-center"
      style={{ cursor: "pointer" }}
      title="Copy to clipboard"
    >
      {src}
      <p className="mt-2">{name}</p>
    </div>
  );
};

export { Icon };
