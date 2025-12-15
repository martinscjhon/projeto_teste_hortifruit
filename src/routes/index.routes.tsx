import { Login } from "@pages/initials/login";
import { Register } from "@pages/initials/register";
import { ResetPassword } from "@pages/initials/reset_password";
import { SendEmailResetPassword } from "@pages/initials/send_email_reset_password";
import type { FC } from "react";
import { Route, Routes } from "react-router-dom";

export const RoutesPages: FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route path={"/esquecisenha"} element={<SendEmailResetPassword />} />
      <Route path={"/esquecisenha/:token"} element={<ResetPassword />} />
      <Route path={"/cadastro"} element={<Register />} />
    </Routes>
  );
};
