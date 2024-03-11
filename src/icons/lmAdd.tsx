/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { forwardRef } from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

const lmAddComponent: React.ForwardRefRenderFunction<
  SVGSVGElement,
  AssetProps
> = ({ size = 1, color = globalColors.foreground, ...props }, ref) => {
  const [width, height] = useIconSize(24, 24, size);

  return (
    <svg
      ref={ref}
      width={width}
      height={height}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill={color} />
    </svg>
  );
};

export const LmAdd = forwardRef(lmAddComponent);
