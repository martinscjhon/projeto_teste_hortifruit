import type { FC } from "react";
import type { IInputLabel } from "src/@types/@components/input_label";

const style = {
  fontSize: "13.5px",
};

export const InputLabel: FC<IInputLabel> = ({ content }) => {
  return <label style={style}>{content}</label>;
};
