import { ButtonComponent } from "@components/button";
import { IconButtonComponent } from "@components/icon_button";
import { TextComponent } from "@components/text";
import { useProducts } from "@hooks/control_products_hooks";
import { patternColors } from "@shared/colors";
import { IntlCurrentFunction } from "@shared/functions/intl_current";
import { type FC, useEffect, useState } from "react";
import { AiOutlineLine, AiOutlinePlus } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import type { IOpenDetails } from "src/@types/@modules/wrapper_details_product";

import { WrapperOverlay, WrraperContent } from "./styles";

const MIN_QTY = 1;
const MAX_QTY = 99;

export const WrapperDetailsProduct: FC<IOpenDetails> = ({
  isOpen,
  productSelected,
  onClose,
}) => {
  const { addProduct, removeProductById, products, updateProduct } =
    useProducts();
  const [qty, setQty] = useState<number>(1);

  useEffect(() => {
    const isProductExist = products.find((p) => p.id === productSelected.id);

    if (isProductExist) {
      const quantity = isProductExist?.quantity;
      setQty(quantity);
    } else {
      setQty(MIN_QTY);
    }
  }, [isOpen]);

  const increase = () => {
    updateProduct(productSelected.id, { quantity: qty + 1 });
    setQty(qty + 1);
  };

  const decrease = () => {
    updateProduct(productSelected.id, { quantity: qty - 1 });
    setQty(qty - 1);
  };

  return (
    <WrapperOverlay className={isOpen ? "active" : "inactive"}>
      <WrraperContent>
        <div className="wrapper_header">
          <TextComponent content="Detalhes do produto" size="14px" />
          <IconButtonComponent
            icon={IoIosClose}
            color={patternColors.black}
            onClick={onClose}
          />
        </div>

        {productSelected.path && (
          <div className="wrapper_image">
            <img
              src={productSelected.path}
              alt={productSelected.name ?? "produto"}
            />
          </div>
        )}

        <div className="wrapper_root">
          <TextComponent
            content={`Nome: <b>${productSelected.name ?? ""}</b>`}
            size="12px"
          />
          <TextComponent
            content={`Valor: <b>${IntlCurrentFunction(productSelected.value ?? 0)}</b>`}
            size="12px"
          />
          {productSelected.description && (
            <TextComponent
              content={`Descrição: <b>${productSelected.description}</b>`}
              size="14px"
            />
          )}

          <div className="wrapper_description">
            <TextComponent content={"Quantidade:"} size="12px" />
            <div className="qty">
              <IconButtonComponent
                icon={AiOutlineLine}
                size="12px"
                onClick={decrease}
                disabled={qty === MIN_QTY}
                color={patternColors.danger}
              />
              <TextComponent content={String(qty)} size="13px" weight={600} />
              <IconButtonComponent
                icon={AiOutlinePlus}
                size="12px"
                onClick={increase}
                disabled={qty === MAX_QTY}
                color={patternColors.green}
              />
            </div>
          </div>
        </div>

        <div className="wrapper_actions">
          <ButtonComponent
            content={"Adicionar no carrinho"}
            size="12px"
            onClick={() => {
              addProduct({
                description: productSelected.description,
                id: productSelected.id,
                name: productSelected.name,
                path: productSelected.path,
                price: productSelected.value,
                quantity: qty,
              });
              onClose();
            }}
          />
          <ButtonComponent
            content={"Remover do carrinho"}
            backgroundColor={patternColors.danger}
            size="12px"
            onClick={() => {
              removeProductById(productSelected.id);
              onClose();
            }}
          />
        </div>
      </WrraperContent>
    </WrapperOverlay>
  );
};
