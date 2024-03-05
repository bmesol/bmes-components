import { IconProps } from "../DTOs";
import React from "react";

const MenuIcon = ({ width, height, color }: IconProps) => (
  <svg
    width={width || "28"}
    height={height || "23"}
    viewBox="0 0 28 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 21.25C0 20.5596 0.559644 20 1.25 20H26.25C26.9404 20 27.5 20.5596 27.5 21.25C27.5 21.9404 26.9404 22.5 26.25 22.5H1.25C0.559644 22.5 0 21.9404 0 21.25Z"
      fill={color || "currentColor"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 11.25C0 10.5596 0.559644 10 1.25 10H26.25C26.9404 10 27.5 10.5596 27.5 11.25C27.5 11.9404 26.9404 12.5 26.25 12.5H1.25C0.559644 12.5 0 11.9404 0 11.25Z"
      fill={color || "currentColor"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 1.25C0 0.559644 0.559644 0 1.25 0H26.25C26.9404 0 27.5 0.559644 27.5 1.25C27.5 1.94036 26.9404 2.5 26.25 2.5H1.25C0.559644 2.5 0 1.94036 0 1.25Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export { MenuIcon };
