import { IconProps, IconSizes, sizes } from "../DTOs";
import "../../../../styles/global.scss";
import React from "react";

const LocationIcon = ({ size = IconSizes.MD, color, isActive, onClick }: IconProps) => {
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
        <clipPath id="clip272_5013">
          <rect
            id="LocationIcon"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="LocationIcon"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip272_5013)">
        <path
          id="Vector"
          d="M12 22C12 22 4 16 4 10C4 7.87 4.84 5.84 6.34 4.34C7.84 2.84 9.87 2 12 2C14.12 2 16.15 2.84 17.65 4.34C19.15 5.84 20 7.87 20 10C20 16 12 22 12 22Z"
          stroke={isActive && "var(--active-icon-color)" || color || "var(--icon-color)"}
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinejoin="round"
        />
        <path
          id="Vector"
          d="M12 13C10.34 13 9 11.65 9 10C9 8.34 10.34 7 12 7C13.65 7 15 8.34 15 10C15 11.65 13.65 13 12 13Z"
          stroke={isActive && "var(--active-icon-color)" || color || "var(--icon-color)"}
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export { LocationIcon, IconSizes };
