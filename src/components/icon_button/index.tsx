import { type FC } from "react";
import type { IIconButton } from "src/@types/@components/icon_button";

import { patternColors } from "../../shared/colors";

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
