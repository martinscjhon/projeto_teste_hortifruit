import type { FC } from "react";
import { PublicMain } from "./styles";
import { Outlet } from "react-router-dom";

export const PublicLayout: FC = () => {
  return (
    <PublicMain>
      <Outlet />
    </PublicMain>
  )
}