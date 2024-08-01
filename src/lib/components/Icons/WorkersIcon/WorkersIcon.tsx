import { IconProps, IconSizes, sizes } from "../DTOs";
import "../../../../styles/global.scss";
import React from "react";

const WorkersIcon = ({ size = IconSizes.MD, color, isActive, onClick }: IconProps) => {
  return (
    <svg
      width={sizes[size].width}
      height={sizes[size].height}
      viewBox="0 0 37 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onClick={onClick}
      className={onClick && "cursor-pointer"}
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <path
        id="Vector"
        d="M19 16.73C13.47 16.73 9 18.9 9 21.57L9 24L29 24L29 21.57C29 18.9 24.52 16.73 19 16.73ZM14 9.47C14 10.75 14.52 11.98 15.46 12.89C16.4 13.8 17.67 14.31 19 14.31C20.32 14.31 21.59 13.8 22.53 12.89C23.47 11.98 24 10.75 24 9.47L14 9.47ZM18.37 1C18 1 17.75 1.25 17.75 1.6L17.75 5.23L16.5 5.23L16.5 2.21C16.5 2.21 13.68 3.25 13.68 6.75C13.68 6.75 12.75 6.91 12.75 8.26L25.25 8.26C25.18 6.91 24.31 6.75 24.31 6.75C24.31 3.25 21.5 2.21 21.5 2.21L21.5 5.23L20.25 5.23L20.25 1.6C20.25 1.25 20.01 1 19.62 1L18.37 1Z"
        fill={isActive && "var(--active-icon-color)" || color || "var(--icon-color)"}
        fillOpacity="1.000000"
        fillRule="nonzero"
      />
      <path
        id="Vector"
        d="M27 15.73C21.47 15.73 17 17.9 17 20.57L17 23L37 23L37 20.57C37 17.9 32.52 15.73 27 15.73ZM22 8.47C22 9.75 22.52 10.98 23.46 11.89C24.4 12.8 25.67 13.31 27 13.31C28.32 13.31 29.59 12.8 30.53 11.89C31.47 10.98 32 9.75 32 8.47L22 8.47ZM26.37 0C26 0 25.75 0.25 25.75 0.6L25.75 4.23L24.5 4.23L24.5 1.21C24.5 1.21 21.68 2.25 21.68 5.75C21.68 5.75 20.75 5.91 20.75 7.26L33.25 7.26C33.18 5.91 32.31 5.75 32.31 5.75C32.31 2.25 29.5 1.21 29.5 1.21L29.5 4.23L28.25 4.23L28.25 0.6C28.25 0.25 28.01 0 27.62 0L26.37 0Z"
        fill={isActive && "var(--active-icon-color)" || color || "var(--icon-color)"}
        fillOpacity="1.000000"
        fillRule="nonzero"
      />
      <path
        id="Vector"
        d="M10 15.73C4.47 15.73 0 17.9 0 20.57L0 23L20 23L20 20.57C20 17.9 15.52 15.73 10 15.73ZM5 8.47C5 9.75 5.52 10.98 6.46 11.89C7.4 12.8 8.67 13.31 10 13.31C11.32 13.31 12.59 12.8 13.53 11.89C14.47 10.98 15 9.75 15 8.47L5 8.47ZM9.37 0C9 0 8.75 0.25 8.75 0.6L8.75 4.23L7.5 4.23L7.5 1.21C7.5 1.21 4.68 2.25 4.68 5.75C4.68 5.75 3.75 5.91 3.75 7.26L16.25 7.26C16.18 5.91 15.31 5.75 15.31 5.75C15.31 2.25 12.5 1.21 12.5 1.21L12.5 4.23L11.25 4.23L11.25 0.6C11.25 0.25 11.01 0 10.62 0L9.37 0Z"
        fill={isActive && "var(--active-icon-color)" || color || "var(--icon-color)"}
        fillOpacity="1.000000"
        fillRule="nonzero"
      />
    </svg>
  );
};

export { WorkersIcon, IconSizes };
