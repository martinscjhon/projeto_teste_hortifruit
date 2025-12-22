import type { FC } from "react";
import type { ITitleContent } from "src/@types/@components/title";

import { patternColors } from "../../shared/colors";

export const TitleComponent: FC<ITitleContent> = ({
  content,
  color = patternColors.black,
}) => {
  return <h2 style={{ color }}>{content}</h2>;
};
