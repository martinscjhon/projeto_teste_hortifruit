import type { FC } from "react";

import { patternColors } from "../../shared/colors";
import { TextComponent } from "@components/text";

interface ISubTitle {
  content: string
}

export const SubTitleComponent: FC<ISubTitle> = ({content}) => {
  return <TextComponent size="12px" color={patternColors.black} content={content} />;
};
