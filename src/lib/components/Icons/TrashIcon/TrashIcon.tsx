import { IconProps, IconSizes, sizes } from "../DTOs";
import "../../../../styles/global.scss";
import React from "react";

const TrashIcon = ({ size = IconSizes.MD, color, isActive, onClick }: IconProps) => {
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
        <clipPath id="clip272_4672">
          <rect
            id="TrashIcon"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="TrashIcon"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip272_4672)">
        <path
          id="Vector"
          d="M3 6L21 6"
          stroke={isActive && "var(--active-icon-color)" || color || "var(--icon-color)"}
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          id="Vector"
          d="M19 6L19 20C19 21 18 22 17 22L7 22C6 22 5 21 5 20L5 6"
          stroke={isActive && "var(--active-icon-color)" || color || "var(--icon-color)"}
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          id="Vector"
          d="M8 6L8 4C8 3 9 2 10 2L14 2C15 2 16 3 16 4L16 6"
          stroke={isActive && "var(--active-icon-color)" || color || "var(--icon-color)"}
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          id="Vector"
          d="M10 11L10 17"
          stroke={isActive && "var(--active-icon-color)" || color || "var(--icon-color)"}
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          id="Vector"
          d="M14 11L14 17"
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

export { TrashIcon, IconSizes };
