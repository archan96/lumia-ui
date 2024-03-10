"use client";
import React, { useState, useEffect } from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";

export const lmBubble: React.FC<AssetProps> = ({
  size = 1,
  color = globalColors.foreground,
  ...props
}) => {
  interface IconSizes {
    width: number;
    height: number;
  }

  const icon: IconSizes = {
    width: 24,
    height: 24,
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
      <g clip-path="url(#clip0_28_60979)">
        <path
          d="M1.56537 1.57824C2.56887 0.568673 3.93168 0 5.35443 0H18.6456C20.0683 0 21.4311 0.568671 22.4347 1.57824C23.4379 2.58753 24 3.95467 24 5.3785V13.9362C23.9935 14.5962 23.8387 15.3793 23.5935 15.9917C23.3362 16.5994 22.8946 17.2644 22.4347 17.7363C21.9651 18.1994 21.3026 18.6447 20.6973 18.9041C20.0866 19.1513 19.3041 19.308 18.6456 19.3147H17.3544V21.5445H17.3501C17.3493 21.9309 17.2514 22.4213 17.1053 22.7349C16.9075 23.0846 16.477 23.5197 16.1283 23.7226L16.1284 23.7228C16.1275 23.7233 16.1266 23.7237 16.246 23.7242C16.1249 23.7245 16.1242 23.725 16.1235 23.7254L16.1235 23.7252C15.8221 23.8721 15.3344 23.9916 15.001 24H14.9964C14.3267 23.9937 13.6881 23.7228 13.2177 23.2486L9.24948 19.3147H5.35443C3.93168 19.3147 2.56887 18.7461 1.56537 17.7363C1.10542 17.2644 0.663749 16.5994 0.406474 15.9917C0.161355 15.3793 0.00650619 14.5962 0 13.9362V5.3785C0 3.95467 0.56214 2.58753 1.56537 1.57824ZM5.35443 2.73418C4.66215 2.73418 3.99657 3.01077 3.50453 3.50577C3.01222 4.00106 2.73418 4.67453 2.73418 5.3785V13.9362C2.72767 14.3297 2.7791 14.5899 2.93474 14.9508C3.07822 15.3165 3.22397 15.536 3.50453 15.8089C3.99657 16.3039 4.66215 16.5805 5.35443 16.5805H9.81228C10.1728 16.5805 10.5187 16.7229 10.7747 16.9767L14.6203 20.789V17.9475C14.6203 17.1926 15.2323 16.5805 15.9873 16.5805H18.6456C19.0344 16.5871 19.2886 16.5362 19.6455 16.3803C20.0078 16.2365 20.2245 16.0909 20.4955 15.8089C20.7759 15.536 20.9218 15.3165 21.0653 14.9508C21.221 14.5899 21.2724 14.3297 21.2659 13.9362V5.3785C21.2659 4.67453 20.9878 4.00104 20.4955 3.50577C20.0035 3.01077 19.3378 2.73418 18.6456 2.73418H5.35443Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_28_60979">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

