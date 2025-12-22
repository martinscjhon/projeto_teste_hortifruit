import { TitleComponent } from "@components/title";
import { WrapperProductsModule } from "@modules/wrapper_products";
import { MockAcougue } from "@shared/mock/acougue";
import { MockBebidas } from "@shared/mock/bebidas";
import { MockCongelados } from "@shared/mock/congelados";
import { MockFrutas } from "@shared/mock/frutas";
import { MockPadaria } from "@shared/mock/padaria";
import { MockVerdurasLegumes } from "@shared/mock/verduras_legumes";
import { useState, type FC } from "react";

import { PrincipalContainer } from "./styles";
import { Input } from "@components/input";
import { CiSearch } from "react-icons/ci";
import { useProducts } from "@hooks/control_products_hooks";
import { ButtonComponent } from "@components/button";
import { patternColors } from "@shared/colors";
import { MdDelete, MdKeyboardArrowRight } from "react-icons/md";

export const PageInitial: FC = () => {
  const [search, setSearch] = useState<string>("")
  const { products, clearProducts } = useProducts();

  return (
    <PrincipalContainer>
      <TitleComponent content={"Página inicial"} />

      <Input.Root>
        <Input.Wrapper>
          <Input.Element
            placeholder="Buscar produtos"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            name="search"
            type="text"
          />
          <Input.Icon icon={CiSearch} />
        </Input.Wrapper>
      </Input.Root>

      <WrapperProductsModule values={MockFrutas.products} subtitle={MockFrutas.categorieName} categorieUuid={MockFrutas.categorieId} />
      <WrapperProductsModule values={MockCongelados.products} subtitle={MockCongelados.categorieName} categorieUuid={MockCongelados.categorieId} />
      <WrapperProductsModule values={MockBebidas.products} subtitle={MockBebidas.categorieName} categorieUuid={MockBebidas.categorieId} />
      <WrapperProductsModule values={MockPadaria.products} subtitle={MockPadaria.categorieName} categorieUuid={MockPadaria.categorieId} />
      <WrapperProductsModule
        categorieUuid={MockVerdurasLegumes.categorieId}
        values={MockVerdurasLegumes.products}
        subtitle={MockVerdurasLegumes.categorieName}
      />
      <WrapperProductsModule values={MockAcougue.products} subtitle={MockAcougue.categorieName} categorieUuid={MockAcougue.categorieId} />

      {products.length > 0 && (
        <div className="wrapper_actions_buttons">
          <ButtonComponent content={"Limpar carrinho"} backgroundColor={patternColors.danger} onClick={clearProducts} icon={MdDelete} />
          <ButtonComponent content={"Ir para pagamento"} icon={MdKeyboardArrowRight } backgroundColor={patternColors.green}/>
        </div>
      )}
    </PrincipalContainer>
  );
};
