import { IconProps, IconSizes, sizes } from "../DTOs";
import "../../../../styles/global.scss";
import React from "react";

const ClientsIcon = ({ size = IconSizes.MD, color, isActive, onClick }: IconProps) => {
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
        d="M19 6C19 7.5913 19.6321 9.11742 20.7574 10.2426C21.8826 11.3679 23.4087 12 25 12C26.5913 12 28.1174 11.3679 29.2426 10.2426C30.3679 9.11742 31 7.5913 31 6C31 4.4087 30.3679 2.88258 29.2426 1.75736C28.1174 0.632141 26.5913 0 25 0C23.4087 0 21.8826 0.632141 20.7574 1.75736C19.6321 2.88258 19 4.4087 19 6ZM23.4297 15.3844L24.3016 16.8375L22.7406 22.6453L21.0531 15.7594C20.9594 15.3797 20.5938 15.1312 20.2141 15.2297C16.9328 16.05 14.5 19.0219 14.5 22.5609C14.5 23.3578 15.1469 24 15.9391 24H34.0609C34.8578 24 35.5 23.3531 35.5 22.5609C35.5 19.0219 33.0672 16.05 29.7859 15.2297C29.4062 15.1359 29.0406 15.3844 28.9469 15.7594L27.2594 22.6453L25.6984 16.8375L26.5703 15.3844C26.8703 14.8828 26.5094 14.25 25.9281 14.25H24.0766C23.4953 14.25 23.1344 14.8875 23.4344 15.3844H23.4297Z"
        fill={isActive && "var(--active-icon-color)" || color || "var(--icon-color)"}
      />
    </svg>
  );
};

export { ClientsIcon, IconSizes };
