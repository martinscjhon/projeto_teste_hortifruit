import { type ButtonHTMLAttributes, type FC } from "react";
import { patternColors } from "../../shared/colors";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
  backgroundColor?: string;
  color?: string;
}

const style = {
  height: "2.5rem",
  fontWeight: 600,
  fontSize: "14px",
};

export const ButtonComponent: FC<IButton> = ({
  content,
  backgroundColor = patternColors.orange,
  color = patternColors.white,
  ...rest
}) => {
  return (
    <button {...rest} style={{ ...style, backgroundColor, color }}>
      {content}
    </button>
  );
};
