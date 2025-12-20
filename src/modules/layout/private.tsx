import { FooterModule } from "@modules/footer";
import type { FC } from "react";
import { Outlet } from "react-router-dom";

import { ToolbarModule } from "../toolbar";
import { ContentWrapper, PrivateMain } from "./styles";

export const PrivateLayout: FC = () => {
  return (
    <PrivateMain>
      <ToolbarModule />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <FooterModule />
    </PrivateMain>
  );
};
