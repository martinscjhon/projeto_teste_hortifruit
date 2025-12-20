import type { FC } from "react";
import { Outlet } from "react-router-dom";

import { PublicMain } from "./styles";

export const PublicLayout: FC = () => {
  return (
    <PublicMain>
      <Outlet />
    </PublicMain>
  );
};
