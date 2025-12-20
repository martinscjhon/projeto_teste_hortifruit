import type { FC } from "react";
import { ContentWrapper, PrivateMain } from "./styles";
import { Outlet } from "react-router-dom";
import { ToolbarModule } from "../toolbar";
import { FooterModule } from "@modules/footer";

export const PrivateLayout: FC = () => {
  return (
    <PrivateMain>
      <ToolbarModule />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <FooterModule />
    </PrivateMain>
  )
}