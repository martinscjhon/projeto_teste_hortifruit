import { patternColors } from "@shared/colors";
import type { FC } from "react";
import type { ITextComponent } from "src/@types/@components/text";

export const TextComponent: FC<ITextComponent> = ({
  content,
  size = "16px",
  weight = 400,
  color = patternColors.black,
  className,
  fontStyle = "normal",
}) => {
  return (
    <p
      style={{ fontSize: size, fontWeight: weight, color, fontStyle }}
      className={className}
      dangerouslySetInnerHTML={{ __html: content ?? "" }}
    />
  );
};
