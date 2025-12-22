import type { FC } from "react";
import type { IInputWrapper } from "src/@types/@components/input_wrapper";

import { patternColors } from "../../shared/colors";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: `1px solid ${patternColors.gray}`,
  borderRadius: "4px",
  paddingRight: "10px",
};

export const InputWrapper: FC<IInputWrapper> = ({ children }) => {
  return <div style={style}>{children}</div>;
};
