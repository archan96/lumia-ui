import React from "react";

export interface CheckboxProps
  extends React.HtmlHTMLAttributes<HTMLInputElement> {
  label?: string;
  showIndeterminate?: boolean;
  isChecked?: boolean;
  onUpdate?: (value: boolean) => void;
  value?: boolean;
}