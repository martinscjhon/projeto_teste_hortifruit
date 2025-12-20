import { patternColors } from "@shared/colors";
import type { FC } from "react";

interface ITextComponent {
  content: string;
  size?: string;
  weight?: number;
  color?: string;
  className?: string;
}

export const TextComponent: FC<ITextComponent> = ({
  content,
  size = "16px",
  weight = 400,
  color = patternColors.black,
  className,
}) => {
  return (
    <p
      style={{ fontSize: size, fontWeight: weight, color }}
      className={className}
    >
      {content}
    </p>
  );
};
