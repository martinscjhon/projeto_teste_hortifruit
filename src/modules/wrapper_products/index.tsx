import { BadgeComponent } from "@components/badge";
import { SubTitleComponent } from "@components/subtitle";
import { TextComponent } from "@components/text";
import { useProducts } from "@hooks/control_products_hooks";
import { WrapperDetailsProduct } from "@modules/wrapper_details_product";
import { patternColors } from "@shared/colors";
import { IntlCurrentFunction } from "@shared/functions/intl_current";
import { type FC, useState } from "react";
import { Link } from "react-router-dom";
import type {
  IDadosProducts,
  IWrapperProducts,
} from "src/@types/@modules/wrapper_products";

import { Wrapper } from "./styles";

export const WrapperProductsModule: FC<IWrapperProducts> = ({
  values,
  subtitle,
}) => {
  const { products } = useProducts();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [productSelected, setProductSelected] = useState<IDadosProducts>({
    description: "",
    id: "",
    name: "",
    path: "",
    value: 0,
  });

  const selectProduct = (product: IDadosProducts) => {
    const { description, id, name, path, value } = product;
    setOpenModal(true);
    setProductSelected({ description, id, name, path, value });
  };

  return (
    <>
      <Wrapper>
        <div className="wrapper_header">
          <SubTitleComponent content={subtitle} />
          <Link to={""}>Ver mais</Link>
        </div>
        <div className="wrapper_map">
          {values.map((v) => {
            const item = products.find((p) => p.id === v.id);
            return (
              <div
                className={`wrapper_container ${!!item && "active"}`}
                onClick={() => selectProduct(v)}
                key={v.id}
              >
                <img src={v.path} alt={v.name} />
                <TextComponent content={v.name} size="10px" />
                {v.description && (
                  <TextComponent
                    content={v.description}
                    size="9px"
                    className="description"
                  />
                )}
                <TextComponent
                  content={IntlCurrentFunction(v.value)}
                  size="10px"
                  weight={600}
                  color={patternColors.black}
                />
                {item?.quantity && (
                  <BadgeComponent
                    value={item?.quantity}
                    color={patternColors.black}
                  />
                )}
              </div>
            );
          })}
        </div>
      </Wrapper>

      <WrapperDetailsProduct
        isOpen={openModal}
        productSelected={productSelected}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};
