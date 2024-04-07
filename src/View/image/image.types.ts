import { AssetProps } from "@icons/types/asset.types";
import React from "react";

export interface ImageProps extends React.HtmlHTMLAttributes<HTMLImageElement> {
  title?: string;
  numberOfLinesForTitle?: number;
  description?: string;
  numberOfLinesForDescription?: number;
  overlay: false;
  overlayOpacity: number;
  source: string;
  icon?: AssetProps;
  aspectRatio?:  number;
  canUpdate: boolean;
  updateUI?: 'overlay' | 'pen';
  onUpdate?: (src:string) => void;
  accepted?: string;
  fit?: 'contain' | 'cover' | 'fill' | 'scale-down' | 'none';
  borderRadius?: number;
}