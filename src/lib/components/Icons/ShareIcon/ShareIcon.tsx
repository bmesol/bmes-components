import { IconProps, IconSizes, sizes } from "../DTOs";
import "../../../../styles/global.scss";
import React from "react";

const ShareIcon = ({ size = IconSizes.MD, color, isActive, onClick }: IconProps) => {
  return (
    <svg
      width={sizes[size].width}
      height={sizes[size].height}
      viewBox="0 0 27 29.6667"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onClick={onClick}
      className={onClick && "cursor-pointer"}
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <path
        id="Icon"
        d="M21.5 9.5C19.29 9.5 17.5 7.7 17.5 5.5C17.5 3.29 19.29 1.5 21.5 1.5C23.7 1.5 25.5 3.29 25.5 5.5C25.5 7.7 23.7 9.5 21.5 9.5ZM5.5 18.83C3.29 18.83 1.5 17.04 1.5 14.83C1.5 12.62 3.29 10.83 5.5 10.83C7.7 10.83 9.5 12.62 9.5 14.83C9.5 17.04 7.7 18.83 5.5 18.83ZM21.5 28.16C19.29 28.16 17.5 26.37 17.5 24.16C17.5 21.95 19.29 20.16 21.5 20.16C23.7 20.16 25.5 21.95 25.5 24.16C25.5 26.37 23.7 28.16 21.5 28.16ZM8.95 16.84L18.06 22.15M18.04 7.51L8.95 12.82"
        stroke={(isActive && "var(--active-icon-color)") || color || "var(--icon-color)"}
        strokeOpacity="1.000000"
        strokeWidth="3.000000"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};

export { ShareIcon, IconSizes };
