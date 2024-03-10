"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const lmDoubleArrowRight: React.FC<AssetProps> = ({
  size = 1,
  color = globalColors.foreground,
  ...props
}) => {
  const [width, height] = useIconSize(24, 24, size);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.8226 12C12.823 12.2046 12.783 12.4072 12.7049 12.5963C12.6267 12.7853 12.512 12.9571 12.3673 13.1017L6.76136 18.7076C6.5655 18.8972 6.30298 19.0022 6.0304 19C5.75782 18.9978 5.49704 18.8885 5.30429 18.6957C5.11154 18.503 5.00228 18.2422 5.00006 17.9696C4.99785 17.6971 5.10287 17.4345 5.29246 17.2387L10.4271 12.104C10.4408 12.0904 10.4517 12.0741 10.4591 12.0563C10.4665 12.0385 10.4703 12.0193 10.4703 12C10.4703 11.9807 10.4665 11.9615 10.4591 11.9437C10.4517 11.9259 10.4408 11.9096 10.4271 11.896L5.29246 6.76133C5.10287 6.56547 4.99785 6.30295 5.00006 6.03037C5.00228 5.75779 5.11154 5.49701 5.30429 5.30426C5.49704 5.11151 5.75782 5.00225 6.0304 5.00003C6.30298 4.99782 6.5655 5.10284 6.76136 5.29243L12.3673 10.8983C12.512 11.0429 12.6267 11.2147 12.7049 11.4037C12.783 11.5928 12.823 11.7954 12.8226 12Z" 
        fill={color}
      />
      <path
        d="M18.7957 12C18.7961 12.2046 18.7561 12.4072 18.678 12.5963C18.5998 12.7853 18.4851 12.9571 18.3404 13.1017L12.7345 18.7076C12.5386 18.8972 12.2761 19.0022 12.0035 19C11.731 18.9978 11.4702 18.8885 11.2774 18.6957C11.0847 18.503 10.9754 18.2422 10.9732 17.9696C10.971 17.6971 11.076 17.4345 11.2656 17.2387L16.4003 12.104C16.4139 12.0904 16.4248 12.0741 16.4322 12.0563C16.4396 12.0385 16.4434 12.0193 16.4434 12C16.4434 11.9807 16.4396 11.9615 16.4322 11.9437C16.4248 11.9259 16.4139 11.9096 16.4003 11.896L11.2656 6.76133C11.076 6.56547 10.971 6.30295 10.9732 6.03037C10.9754 5.75779 11.0847 5.49701 11.2774 5.30426C11.4702 5.11151 11.731 5.00225 12.0035 5.00003C12.2761 4.99782 12.5386 5.10284 12.7345 5.29243L18.3404 10.8983C18.4851 11.0429 18.5998 11.2147 18.678 11.4037C18.7561 11.5928 18.7961 11.7954 18.7957 12Z" 
        fill={color}
      />
    </svg>
  );
};
