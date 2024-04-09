import { IconProps, IconSizes, sizes } from "../DTOs";
import "../../../../styles/global.scss";
import React from "react";

const ChevronDownIcon = ({ size = IconSizes.MD, color, isActive, onClick }: IconProps) => {
  return (
    <svg
      width={sizes[size].width}
      height={sizes[size].height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onClick={onClick}
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <path
        id="path"
        d="M5.03 8.67L11.03 14.67L17.03 8.67"
        stroke={isActive && "var(--active-icon-color)" || color || "var(--icon-color)"}
        stroke-opacity="1.000000"
        stroke-width="2.000000"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
    </svg>
  );
};

export { ChevronDownIcon, IconSizes };
