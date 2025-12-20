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
  return <h2 style={{ color }}>{content}</h2>;
};
