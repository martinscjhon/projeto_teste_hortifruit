import { type ButtonHTMLAttributes, type ElementType, type FC } from "react";

import { patternColors } from "../../shared/colors";

interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
  backgroundColor?: string;
  color?: string;
  size?: string
}

export const IconButtonComponent: FC<IIconButton> = ({
  icon: Icon,
  backgroundColor = "transparent",
  color = patternColors.white,
  size = "20px",
  ...rest
}) => {
  return (
    <button {...rest} style={{ backgroundColor, color, fontSize: size }}>
      <Icon />
    </button>
  );
};
