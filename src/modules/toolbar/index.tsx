import profile from "@assets/profile.jpg";
import { BadgeComponent } from "@components/badge";
import { IconButtonComponent } from "@components/icon_button";
import { useProducts } from "@hooks/control_products_hooks";
import type { FC } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";

import { Header } from "./styles";

export const ToolbarModule: FC = () => {
  const { products } = useProducts();

  return (
    <Header>
      <IconButtonComponent icon={IoIosMenu} />
      <div className="wrapper_badge">
        {products.length > 0 && <BadgeComponent value={products.length} />}
        <IconButtonComponent icon={AiOutlineShoppingCart} />
        <img src={profile} alt="profile" />
      </div>
    </Header>
  );
};
