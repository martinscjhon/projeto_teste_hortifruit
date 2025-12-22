import type { FC } from "react";
import type { InputProps } from "src/@types/@components/input_element";

const style = {
  height: "2.5rem",
  borderRadius: "4px",
  paddingLeft: "10px",
  width: "100%",
};

export const InputComponent: FC<InputProps> = ({ ...rest }) => {
  return <input {...rest} style={style} />;
};
