import { IconProps, sizes } from "../DTOs";
import React from "react";

const EditIcon = ({ size = "md", color, onClick }: IconProps) => {
  return (
    <svg
      width={sizes[size].width}
      height={sizes[size].height}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M4 5.50005H3C2.46957 5.50005 1.96086 5.71076 1.58579 6.08583C1.21071 6.4609 1 6.96961 1 7.50005V16.5C1 17.0305 1.21071 17.5392 1.58579 17.9143C1.96086 18.2893 2.46957 18.5 3 18.5H12C12.5304 18.5 13.0391 18.2893 13.4142 17.9143C13.7893 17.5392 14 17.0305 14 16.5V15.5M13 3.50005L16 6.50005M17.385 5.08505C17.7788 4.6912 18.0001 4.15703 18.0001 3.60005C18.0001 3.04306 17.7788 2.50889 17.385 2.11505C16.9912 1.7212 16.457 1.49994 15.9 1.49994C15.343 1.49994 14.8088 1.7212 14.415 2.11505L6 10.5V13.5H9L17.385 5.08505Z"
        stroke={color || "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { EditIcon };
