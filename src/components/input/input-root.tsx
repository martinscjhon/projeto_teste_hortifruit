import type { FC, ReactNode } from "react";

interface IInput {
  children: ReactNode;
}

export const InputRoot: FC<IInput> = ({ children }) => {
  return <div>{children}</div>;
};
