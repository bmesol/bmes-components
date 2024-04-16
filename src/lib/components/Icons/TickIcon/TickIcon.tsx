import { IconProps, IconSizes, sizes } from "../DTOs";
import "../../../../styles/global.scss";
import React from "react";

const TickIcon = ({ size = IconSizes.MD, color, isActive, onClick }: IconProps) => {
  return (
    <svg
      width={sizes[size].width}
      height={sizes[size].height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onClick={onClick}
      className={onClick && "cursor-pointer"}
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <rect
        id="TickIcon"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <path
        id="Vector"
        d="M20 6L9 17L4 12"
        stroke={isActive && "var(--active-icon-color)" || color || "var(--icon-color)"}
        strokeOpacity="1.000000"
        strokeWidth="2.000000"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};

export { TickIcon, IconSizes };
