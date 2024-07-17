import { IconProps, IconSizes, sizes } from "../DTOs";
import "../../../../styles/global.scss";
import React from "react";

const ClockIcon = ({ size = IconSizes.MD, color, isActive, onClick }: IconProps) => {
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
        <clipPath id="clip729_14075">
          <rect
            id="ClockIcon"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="ClockIcon"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip729_14075)">
        <path
          id="Icon"
          d="M12 22C6.47 22 2 17.52 2 12C2 6.47 6.47 2 12 2C17.52 2 22 6.47 22 12C22 17.52 17.52 22 12 22ZM12 6L12 12L16 14"
          stroke={isActive && "var(--active-icon-color)" || color || "var(--icon-color)"}
          strokeOpacity="1.000000"
          strokeWidth="3.000000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export { ClockIcon, IconSizes };
