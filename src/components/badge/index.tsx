import type { FC } from "react";
import { Wrapper } from "./styles";
import { patternColors } from "@shared/colors";
import type { IBadge } from "src/@types/@components/badge";

export const BadgeComponent: FC<IBadge> = ({ value, color = patternColors.danger }) => {
  return (
    <Wrapper className="wrapper_badge_component" style={{ backgroundColor: color }}>
      <span>{value}</span>
    </Wrapper>
  )
}