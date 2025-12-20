import type { FC } from "react";
import { Footer } from "./styles";
import { TextComponent } from "@components/text";
import { patternColors } from "@shared/colors";

export const FooterModule: FC = () => {
  return (
    <Footer>
      <TextComponent content={`@${new Date().getFullYear()} - Versão 1.0`} size="12px" color={patternColors.white} />
    </Footer>
  )
}