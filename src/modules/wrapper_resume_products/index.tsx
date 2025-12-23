import { BadgeComponent } from "@components/badge";
import { SubTitleComponent } from "@components/subtitle";
import { TextComponent } from "@components/text";
import { useProducts } from "@hooks/control_products_hooks";
import { WrapperDetailsProductModule } from "@modules/wrapper_add_product_cart";
import { patternColors } from "@shared/colors";
import { IntlCurrentFunction } from "@shared/functions/intl_current";
import { type FC, useState } from "react";
import { Link } from "react-router-dom";
import type {
  IDadosProducts,
  IWrapperListProducts,
} from "src/@types/@modules/wrapper_list_products";

import { Wrapper } from "./styles";

export const WrapperResumeProductsModule: FC<IWrapperListProducts> = ({
  values,
  subtitle,
  categorieUuid
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
          <Link to={`/categorie/${categorieUuid}`}>Ver mais</Link>
        </div>
        <div className="wrapper_map">
          {values.slice(0, 8).map((v) => {
            const item = products.find((p) => p.id === v.id);
            return (
              <div
                className={`wrapper_container ${!!item && "active"}`}
                onClick={() => selectProduct(v)}
                key={v.id}
              >
                <img src={v.path} alt={v.name} />
                <TextComponent content={v.name} size="10px"  fontStyle="italic" />
                {v.description && (
                  <TextComponent
                    content={v.description}
                    size="9px"
                    fontStyle="italic"
                  />
                )}
                <TextComponent
                  content={IntlCurrentFunction(v.value)}
                  size="10px"
                  weight={600}
                  color={patternColors.green}
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

      <WrapperDetailsProductModule
        isOpen={openModal}
        productSelected={productSelected}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};
