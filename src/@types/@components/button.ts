import type { ButtonHTMLAttributes, ElementType } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
  backgroundColor?: string;
  color?: string;
  size?: string;
  icon?: ElementType;
}
