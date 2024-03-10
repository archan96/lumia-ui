"use client";
import React, { useState, useEffect } from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";

export const LumiaLogo: React.FC<AssetProps> = ({
  size = 1,
  color = globalColors.foreground,
  ...props
}) => {
  interface IconSizes {
    width: number;
    height: number;
  }

  const icon: IconSizes = {
    width: 125,
    height: 125,
  };

  const [width, setWidth] = useState<number>(icon?.width * size);
  const [height, setHeight] = useState<number>(icon?.width * size);

  useEffect(() => {
    let widthNow: number = icon?.width ?? 0;
    let heightNow: number = icon?.height ?? 0;
    widthNow *= size;
    heightNow *= size;
    setWidth(widthNow);
    setHeight(heightNow);
  }, [size]);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${icon?.width} ${icon?.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M42 20C29.8497 20 20 29.8497 20 42V83C20 95.001 29.6092 104.758 41.5532 104.996C46.6674 104.804 52.0686 98.4476 53.5 94.5C53.5391 94.4032 53.579 94.3057 53.6195 94.2066C54.2295 92.7145 54.9937 90.8453 55.8458 84.9931C56.5 80.5 55.5 78.7768 53 75.8448C45.5475 67.1046 44 65 40.2045 58.9606C39.4768 57.8027 38.8466 56.8232 38.2921 55.9613C35.5546 51.7065 34.6631 50.321 33 44.5C32.623 43.1805 32.5 41.5 32.5 39.5C32.5 37.6501 32.9278 37.0835 34.179 35.4262C34.2805 35.2917 34.3874 35.1501 34.5 35C34.614 35.57 34.6852 36.0662 34.7488 36.5095C34.9642 38.0103 35.0924 38.9042 36.5 40C37.6475 40.894 38.5 41.5 40.862 43C41.7494 43.5636 42.5001 44.1074 43.296 44.684C44.4301 45.5056 45.656 46.3936 47.5 47.5C48.7771 48.2663 49.7046 48.8041 50.612 49.3303C51.4808 49.8341 52.3312 50.3272 53.4525 51C55.1707 52.0309 55.9666 52.5895 56.7834 53.1627C57.155 53.4235 57.5309 53.6873 58 54C59.5 55 61.362 56.5 62.862 58C63.1487 58.2868 63.5766 58.8137 64.0513 59.3984C64.6429 60.127 65.3072 60.9452 65.8619 61.5C68.8619 60.5 72.0629 59.861 75.4155 60.1441C78.4627 60.4096 80.9489 60.9937 83.4239 61.5751C84.2664 61.773 85.1077 61.9706 85.9693 62.1552C89.3702 62.8841 93.2764 62.3284 96.7174 61.8239C96.7603 61.8059 96.8078 61.7879 96.8584 61.7687C97.2624 61.6158 97.8619 61.3887 97.862 60.5C98.3619 61 98.3535 61.9711 97.8619 63C97.8423 63.0386 97.823 63.0764 97.8042 63.1134C97.4088 63.8908 97.1953 64.3105 96.7174 64.8061C96.049 65.4992 95.4299 65.8657 94.7464 66.2705C94.6206 66.345 94.4927 66.4207 94.3619 66.5C92.9248 67.3719 91.7001 67.8006 90.4127 68.2512C89.4906 68.5739 88.5363 68.9079 87.4488 69.424C84.7949 70.6832 82.1489 72.1358 79.4792 73.6014C78.1084 74.3539 76.7314 75.1098 75.3438 75.8448C73.1002 77.0333 70.367 79.2511 69.7901 80.7962C69.2131 82.3414 68.1171 86.8133 67.6694 91.4108C67.3423 95.9381 68.4178 104.99 75.3328 105L75.3438 105L83 105C95.1503 105 105 95.1503 105 83V42C105 29.8497 95.1503 20 83 20H42Z"
        fill={color}
      />
    </svg>
  );
};

