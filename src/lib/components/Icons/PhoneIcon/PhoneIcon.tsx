import { IconProps, IconSizes, sizes } from "../DTOs";
import "../../../../styles/global.scss";
import React from "react";

const PhoneIcon = ({ size = IconSizes.MD, color, isActive, onClick }: IconProps) => {
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
        <clipPath id="clip272_5022">
          <rect id="Phone" width="24.000000" height="24.000000" fill="white" fillOpacity="0" />
        </clipPath>
      </defs>
      <rect id="Phone" width="24.000000" height="24.000000" fill="#FFFFFF" fillOpacity="0" />
      <g clipPath="url(#clip272_5022)">
        <path
          id="Vector"
          d="M22 19.92C22 20.19 21.94 20.47 21.83 20.72C21.72 20.98 21.55 21.21 21.35 21.4C21.14 21.59 20.9 21.73 20.64 21.82C20.37 21.91 20.09 21.94 19.82 21.92C16.74 21.58 13.78 20.53 11.19 18.85C8.77 17.31 6.72 15.26 5.19 12.85C3.49 10.24 2.44 7.27 2.11 4.18C2.09 3.9 2.12 3.62 2.21 3.36C2.3 3.09 2.44 2.85 2.63 2.65C2.82 2.44 3.04 2.28 3.3 2.17C3.55 2.05 3.83 2 4.11 2L7.11 2C7.59 1.99 8.06 2.16 8.43 2.48C8.8 2.79 9.04 3.23 9.1 3.72C9.23 4.68 9.47 5.62 9.81 6.53C9.94 6.88 9.97 7.27 9.89 7.65C9.81 8.02 9.62 8.36 9.35 8.64L8.09 9.91C9.51 12.41 11.58 14.48 14.09 15.91L15.36 14.64C15.63 14.37 15.97 14.18 16.34 14.1C16.72 14.02 17.11 14.05 17.46 14.19C18.37 14.52 19.31 14.76 20.28 14.89C20.76 14.95 21.2 15.2 21.52 15.57C21.84 15.95 22.01 16.42 22 16.92L22 19.92Z"
          stroke={isActive && "var(--active-icon-color)" || color || "var(--icon-color)"}
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export { PhoneIcon, IconSizes };
