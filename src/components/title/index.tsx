import type { FC } from "react";
import { patternColors } from "../../shared/colors";

interface ITitleContent {
  content: string;
  color?: string;
}

export const TitleComponent: FC<ITitleContent> = ({
  content,
  color = patternColors.black,
}) => {
  return <h1 style={{ color }}>{content}</h1>;
};
