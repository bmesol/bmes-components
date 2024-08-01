import { IconProps, IconSizes, sizes } from "../DTOs";
import "../../../../styles/global.scss";
import React from "react";

const WorkerIcon = ({ size = IconSizes.MD, color, isActive, onClick }: IconProps) => {
  return (
    <svg
      width={sizes[size].width}
      height={sizes[size].height}
      viewBox="0 0 50 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={onClick && "cursor-pointer"}
    >
      <path
        d="M25 15.7368C19.475 15.7368 15 17.9037 15 20.5789V23H35V20.5789C35 17.9037 30.525 15.7368 25 15.7368ZM20 8.47368C20 9.75789 20.5268 10.9895 21.4645 11.8976C22.4021 12.8056 23.6739 13.3158 25 13.3158C26.3261 13.3158 27.5979 12.8056 28.5355 11.8976C29.4732 10.9895 30 9.75789 30 8.47368M24.375 0C24 0 23.75 0.254211 23.75 0.605263V4.23684H22.5V1.21053C22.5 1.21053 19.6875 2.25158 19.6875 5.75C19.6875 5.75 18.75 5.91947 18.75 7.26316H31.25C31.1875 5.91947 30.3125 5.75 30.3125 5.75C30.3125 2.25158 27.5 1.21053 27.5 1.21053V4.23684H26.25V0.605263C26.25 0.254211 26.0125 0 25.625 0H24.375Z"
        fill={isActive && "var(--active-icon-color)" || color || "var(--icon-color)"}
      />
    </svg>
  );
};

export { WorkerIcon, IconSizes };
