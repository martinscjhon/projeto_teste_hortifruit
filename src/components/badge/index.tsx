import { patternColors } from "@shared/colors";
import type { FC } from "react";
import type { IBadge } from "src/@types/@components/badge";

import { Wrapper } from "./styles";

export const BadgeComponent: FC<IBadge> = ({
  value,
  color = patternColors.danger,
}) => {
  return (
    <Wrapper
      className="wrapper_badge_component"
      style={{ backgroundColor: color }}
    >
      <span>{value}</span>
    </Wrapper>
  );
};
