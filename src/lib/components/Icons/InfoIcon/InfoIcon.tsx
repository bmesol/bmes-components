import { IconProps, IconSizes, sizes } from "../DTOs";
import "../../../../styles/global.scss";
import React from "react";

const InfoIcon = ({ size = IconSizes.MD, color, isActive, onClick }: IconProps) => {
  return (
    <svg
      width={sizes[size].width}
      height={sizes[size].height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onClick={onClick}
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <rect
        id="InfoIcon"
        width="22.333290"
        height="22.433328"
        transform="translate(-0.666992 -0.915527)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <path
        id="path"
        d="M10.49 0.58C5.16 0.58 0.83 4.91 0.83 10.25C0.83 15.58 5.16 19.91 10.49 19.91C15.83 19.91 20.16 15.58 20.16 10.25C20.16 4.91 15.83 0.58 10.49 0.58ZM-0.67 10.25C-0.67 4.08 4.33 -0.92 10.49 -0.92C16.66 -0.92 21.66 4.08 21.66 10.25C21.66 16.41 16.66 21.41 10.49 21.41C4.33 21.41 -0.67 16.41 -0.67 10.25ZM10.49 9.5C10.91 9.5 11.24 9.83 11.24 10.25L11.24 14.41C11.24 14.83 10.91 15.16 10.49 15.16C10.08 15.16 9.74 14.83 9.74 14.41L9.74 10.25C9.74 9.83 10.08 9.5 10.49 9.5ZM11.24 6.08C11.24 5.67 10.91 5.33 10.49 5.33C10.08 5.33 9.74 5.67 9.74 6.08L9.74 6.18C9.74 6.6 10.08 6.93 10.49 6.93C10.91 6.93 11.24 6.6 11.24 6.18L11.24 6.08Z"
        fill={isActive && "var(--active-icon-color)" || color || "var(--icon-color)"}
        fillOpacity="1.000000"
        fillRule="evenodd"
      />
    </svg>
  );
};

export { InfoIcon, IconSizes };
