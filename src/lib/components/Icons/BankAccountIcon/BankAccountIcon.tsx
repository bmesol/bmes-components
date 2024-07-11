import { IconProps, IconSizes, sizes } from "../DTOs";
import "../../../../styles/global.scss";
import React from "react";

const BankAccountIcon = ({ size = IconSizes.MD, color, isActive, onClick }: IconProps) => {
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
        <clipPath id="clip702_8641">
          <rect id="BankAccountIcon" width="24.000000" height="24.000000" fill="white" fillOpacity="0" />
        </clipPath>
      </defs>
      <g clip-path="url(#clip702_8641)">
        <path
          id="path"
          d="M11.5 1L2 6L2 8L21 8L21 6L11.5 1ZM16 10L16 17L19 17L19 10L16 10ZM2 22L21 22L21 19L2 19L2 22ZM10 10L10 17L13 17L13 10L10 10ZM4 10L4 17L7 17L7 10L4 10Z"
          fill={(isActive && "var(--active-icon-color)") || color || "var(--icon-color)"}
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export { BankAccountIcon, IconSizes };
