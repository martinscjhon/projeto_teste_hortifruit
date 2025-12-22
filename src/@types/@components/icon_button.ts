import type { ButtonHTMLAttributes, ElementType } from "react";

export interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
  backgroundColor?: string;
  color?: string;
  size?: string;
}
