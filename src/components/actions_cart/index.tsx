import { ButtonComponent } from "@components/button";
import { useProducts } from "@hooks/control_products_hooks";
import { patternColors } from "@shared/colors";
import type { FC } from "react";
import { MdDelete, MdKeyboardArrowRight } from "react-icons/md";
import { PrincipalContainer } from "./styles";

export const ActionsCart: FC = () => {
  const { products, clearProducts } = useProducts();

  return (
    <>
      {products.length > 0 && (
        <PrincipalContainer>
          <ButtonComponent
            content={"Limpar carrinho"}
            backgroundColor={patternColors.danger}
            onClick={clearProducts}
            icon={MdDelete}
          />
          <ButtonComponent
            content={"Ir para pagamento"}
            icon={MdKeyboardArrowRight}
            backgroundColor={patternColors.green}
          />
        </PrincipalContainer>
      )}
    </>
  )
}