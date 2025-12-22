import { type FC } from "react";
import { patternColors } from "../../shared/colors";
import type { IIconButton } from "src/@types/@components/icon_button";

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
