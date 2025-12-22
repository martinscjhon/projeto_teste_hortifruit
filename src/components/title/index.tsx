import type { FC } from "react";
import { patternColors } from "../../shared/colors";
import type { ITitleContent } from "src/@types/@components/title";

export const TitleComponent: FC<ITitleContent> = ({
  content,
  color = patternColors.black,
}) => {
  return <h2 style={{ color }}>{content}</h2>;
};
