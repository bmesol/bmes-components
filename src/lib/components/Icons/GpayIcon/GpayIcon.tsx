import { IconProps, IconSizes, sizes } from "../DTOs";
import "../../../../styles/global.scss";
import React from "react";

const GpayIcon = ({ size = IconSizes.MD, onClick }: IconProps) => {
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
        <pattern
          id="pattern_702_86510"
          patternContentUnits="objectBoundingBox"
          width="1.000000"
          height="1.000000"
        >
          <use
            xlinkHref="#image702_8651_0"
            transform="matrix(0.01,0,0,0.01,0,0)"
          />
        </pattern>
        <image
          id="image702_8651_0"
          width="100.000000"
          height="100.000000"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
      <rect
        id="rect"
        width="100.000000"
        height="100.000000"
        fill="url(#pattern_702_86510)"
        fillOpacity="1.000000"
      />
    </svg>
  );
};

export { GpayIcon, IconSizes };
