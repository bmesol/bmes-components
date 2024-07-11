import { IconProps, IconSizes, sizes } from "../DTOs";
import "../../../../styles/global.scss";
import React from "react";

const PhonePeIcon = ({ size = IconSizes.MD, onClick }: IconProps) => {
  return (
    <svg
      width={sizes[size].width}
      height={sizes[size].height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onClick={onClick}
      className={onClick && "cursor-pointer"}
    >
      <desc>Created with Pixso.</desc>
      <defs>
        <clipPath id="clip702_8648">
          <rect
            id="PhonePeIcon"
            width="100.000000"
            height="100.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
        <pattern
          id="pattern_702_86440"
          patternContentUnits="objectBoundingBox"
          width="1.000000"
          height="1.000000"
        >
          <use
            xlinkHref="#image702_8644_0"
            transform="matrix(0.01,0,0,0.01,0,0)"
          />
        </pattern>
        <image
          id="image702_8644_0"
          width="100.000000"
          height="100.000000"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
      <g clipPath="url(#clip702_8648)">
        <rect
          id="rect"
          width="100.000000"
          height="100.000000"
          fill="url(#pattern_702_86440)"
          fillOpacity="1.000000"
        />
      </g>
    </svg>
  );
};

export { PhonePeIcon, IconSizes };
