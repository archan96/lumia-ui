"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmShow: React.FC<AssetProps> = ({
  size = 1,
  color = globalColors.foreground,
  ...props
}) => {
  const [width, height] = useIconSize(28, 28, size);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 28 28`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
    <path d="M25.7633 13.2945C23.1711 7.83398 19.2527 5.08594 14 5.08594C8.74453 5.08594 4.82891 7.83398 2.23672 13.2973C2.13274 13.5174 2.07882 13.7579 2.07882 14.0014C2.07882 14.2448 2.13274 14.4853 2.23672 14.7055C4.82891 20.166 8.74727 22.9141 14 22.9141C19.2555 22.9141 23.1711 20.166 25.7633 14.7027C25.9738 14.2598 25.9738 13.7457 25.7633 13.2945ZM14 20.9453C9.58945 20.9453 6.36016 18.7086 4.08242 14C6.36016 9.29141 9.58945 7.05469 14 7.05469C18.4105 7.05469 21.6398 9.29141 23.9176 14C21.6426 18.7086 18.4133 20.9453 14 20.9453ZM13.8906 9.1875C11.2328 9.1875 9.07812 11.3422 9.07812 14C9.07812 16.6578 11.2328 18.8125 13.8906 18.8125C16.5484 18.8125 18.7031 16.6578 18.7031 14C18.7031 11.3422 16.5484 9.1875 13.8906 9.1875ZM13.8906 17.0625C12.198 17.0625 10.8281 15.6926 10.8281 14C10.8281 12.3074 12.198 10.9375 13.8906 10.9375C15.5832 10.9375 16.9531 12.3074 16.9531 14C16.9531 15.6926 15.5832 17.0625 13.8906 17.0625Z" fill={color}/>

    </svg>
  );
};