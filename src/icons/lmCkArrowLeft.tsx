"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCkArrowLeft: React.FC<AssetProps> = ({
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
    <path d="M10.9729 12C10.9725 11.7954 11.0125 11.5928 11.0907 11.4037C11.1688 11.2147 11.2835 11.0429 11.4283 10.8983L17.0342 5.29243C17.23 5.10284 17.4925 4.99782 17.7651 5.00003C18.0377 5.00225 18.2985 5.11151 18.4912 5.30426C18.684 5.49701 18.7933 5.75779 18.7955 6.03037C18.7977 6.30295 18.6927 6.56547 18.5031 6.76133L13.3684 11.896C13.3547 11.9096 13.3439 11.9259 13.3365 11.9437C13.329 11.9615 13.3252 11.9807 13.3252 12C13.3252 12.0193 13.329 12.0385 13.3365 12.0563C13.3439 12.0741 13.3547 12.0904 13.3684 12.104L18.5031 17.2387C18.6927 17.4345 18.7977 17.6971 18.7955 17.9696C18.7933 18.2422 18.684 18.503 18.4912 18.6957C18.2985 18.8885 18.0377 18.9978 17.7651 19C17.4925 19.0022 17.23 18.8972 17.0342 18.7076L11.4283 13.1017C11.2835 12.9571 11.1688 12.7853 11.0907 12.5963C11.0125 12.4072 10.9725 12.2046 10.9729 12Z" fill={color}/>
<path d="M5 12C4.99959 11.7954 5.03961 11.5928 5.11775 11.4037C5.1959 11.2147 5.31063 11.0429 5.45535 10.8983L11.0613 5.29243C11.2571 5.10284 11.5196 4.99782 11.7922 5.00003C12.0648 5.00225 12.3256 5.11151 12.5183 5.30426C12.7111 5.49701 12.8203 5.75779 12.8225 6.03037C12.8248 6.30295 12.7197 6.56547 12.5301 6.76133L7.39547 11.896C7.38179 11.9096 7.37094 11.9259 7.36354 11.9437C7.35613 11.9615 7.35232 11.9807 7.35232 12C7.35232 12.0193 7.35613 12.0385 7.36354 12.0563C7.37094 12.0741 7.38179 12.0904 7.39547 12.104L12.5301 17.2387C12.7197 17.4345 12.8248 17.6971 12.8225 17.9696C12.8203 18.2422 12.7111 18.503 12.5183 18.6957C12.3256 18.8885 12.0648 18.9978 11.7922 19C11.5196 19.0022 11.2571 18.8972 11.0613 18.7076L5.45535 13.1017C5.31063 12.9571 5.1959 12.7853 5.11775 12.5963C5.03961 12.4072 4.99959 12.2046 5 12Z" fill={color}/>

    </svg>
  );
};