import { patternColors } from "@shared/colors";
import type { FC } from "react";
import type { ITextComponent } from "src/@types/@components/text";

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
      dangerouslySetInnerHTML={{ __html: content ?? "" }}
    />
  );
};
