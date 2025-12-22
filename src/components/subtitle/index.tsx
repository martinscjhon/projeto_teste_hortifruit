import { TextComponent } from "@components/text";
import type { FC } from "react";
import type { ISubTitle } from "src/@types/@components/subtitle";

import { patternColors } from "../../shared/colors";

export const SubTitleComponent: FC<ISubTitle> = ({ content }) => {
  return (
    <TextComponent size="12px" color={patternColors.black} content={content} />
  );
};
