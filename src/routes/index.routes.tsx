import { Route, Routes } from "react-router-dom";
import type { FC } from "react";
import { Login } from "@pages/initials/login";
import { SendEmailResetPassword } from "@pages/initials/send_email_reset_password";
import { ResetPassword } from "@pages/initials/reset_password";
import { Register } from "@pages/initials/register";

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
