import type { IButton } from "src/@types/@components/button";
import { patternColors } from "../../shared/colors";
import type { FC } from "react";

const style = {
  height: "2.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
  fontWeight: 600,
};

export const ButtonComponent: FC<IButton> = ({
  content,
  backgroundColor = patternColors.orange,
  color = patternColors.white,
  size = "12px",
  icon: Icon,
  ...rest
}) => {
  return (
    <button {...rest} style={{ ...style, backgroundColor, color, fontSize: size }}>
      {content}
      {Icon && <Icon />}
    </button>
  );
};
