import { IconProps, IconSizes, sizes } from "../DTOs";
import "../../../../styles/global.scss";
import React from "react";

const SitesIcon = ({ size = IconSizes.MD, color, isActive, onClick }: IconProps) => {
  return (
    <svg
      width={sizes[size].width}
      height={sizes[size].height}
      viewBox="0 0 50 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={onClick && "cursor-pointer"}
    >
      <path
        d="M16.1842 20.3043H20.3947M16.1842 15.6087H20.3947M16.4474 11.9565H20.1316M24.0789 7.78261V5.17391M28.2895 7.78261V5.17391M32.5 13.5217V5.17391M36.7105 7.69548L12.5 8.30435V4.65217L36.7105 5.26104V7.69548ZM20.9211 25H15.6579L16.7105 1H19.8684L20.9211 25ZM27.5 13.5217H37.5V15.6087H27.5V13.5217Z"
        stroke={isActive && "var(--active-icon-color)" || color || "var(--icon-color)"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export { SitesIcon, IconSizes };
