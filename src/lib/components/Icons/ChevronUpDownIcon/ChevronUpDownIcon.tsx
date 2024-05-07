import { IconProps, IconSizes, sizes } from "../DTOs";
import "../../../../styles/global.scss";
import React from "react";

const ChevronUpDownIcon = ({ size = IconSizes.MD, color, isActive, onClick }: IconProps) => {
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
      <defs>
        <clipPath id="clip457_6336">
          <rect
            id="ChevronUpDownIcon"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="ChevronUpDownIcon"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip457_6336)">
        <path
          id="Vector"
          d="M7 15L12 20L17 15"
          stroke={isActive && "var(--active-icon-color)" || color || "var(--icon-color)"}
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          id="Vector"
          d="M7 9L12 4L17 9"
          stroke={isActive && "var(--active-icon-color)" || color || "var(--icon-color)"}
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export { ChevronUpDownIcon, IconSizes };
