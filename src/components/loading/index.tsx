import Skeleton from "@mui/material/Skeleton";
import type { FC } from "react";
import type { ILoading } from "src/@types/@components/loading";

import { WrapperLoading } from "./styles";

export const LoadingComponent: FC<ILoading> = ({
  height = 30,
  type = "rounded",
  width = "100%",
  repeat = 3,
}) => {
  const itens = [];

  for (let index = 0; index < repeat; index++) {
    itens.push(index);
  }

  return (
    <WrapperLoading>
      {itens.map((i) => {
        return (
          <Skeleton variant={type} width={width} height={height} key={i} />
        );
      })}
    </WrapperLoading>
  );
};
