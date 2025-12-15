import { Route, Routes } from "react-router-dom";
import type { FC } from "react";
import { Login } from "../pages/initials/login";

export const RoutesPages: FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
    </Routes>
  );
};