import type { FC } from "react";
import { Header } from "./styles";
import profile from "@assets/profile.jpg"
import { IconButtonComponent } from "@components/icon_button";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineShoppingCart  } from "react-icons/ai";

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
  )
}