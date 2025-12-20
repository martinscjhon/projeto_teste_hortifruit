import { PrivateLayout } from "@modules/layout/private";
import { PublicLayout } from "@modules/layout/public";
import { PageInitial } from "@pages/initial";
import { Login } from "@pages/public/login";
import { Register } from "@pages/public/register";
import { ResetPassword } from "@pages/public/reset_password";
import { SendEmailResetPassword } from "@pages/public/send_email";
import type { FC } from "react";
import { Route, Routes } from "react-router-dom";

export const RoutesPages: FC = () => {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/esquecisenha" element={<SendEmailResetPassword />} />
        <Route path="/esquecisenha/:token" element={<ResetPassword />} />
        <Route path="/cadastro" element={<Register />} />
      </Route>

      {/* Rotas privadas */}
      <Route element={<PrivateLayout />}>
        <Route path="/paginainicial" element={<PageInitial />} />
      </Route>
    </Routes>
  );
};
