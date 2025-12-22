import type { FC } from "react";
import type { IInputIcon } from "src/@types/@components/input_icon";

export const InputIcon: FC<IInputIcon> = ({ icon: Icon }) => {
  return <Icon />;
};
