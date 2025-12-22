import type { FC } from "react";
import type { IInput } from "src/@types/@components/input_root";

export const InputRoot: FC<IInput> = ({ children }) => {
  return <div>{children}</div>;
};
