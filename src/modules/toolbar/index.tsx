import profile from "@assets/profile.jpg";
import { IconButtonComponent } from "@components/icon_button";
import type { FC } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";

import { Header } from "./styles";

export const ToolbarModule: FC = () => {
  return (
    <Header>
      <IconButtonComponent icon={IoIosMenu} />
      <div className="wrapper_badge">
        <span className="products">1</span>
        <IconButtonComponent icon={AiOutlineShoppingCart} />
        <img src={profile} alt="profile" />
      </div>
    </Header>
  );
};
