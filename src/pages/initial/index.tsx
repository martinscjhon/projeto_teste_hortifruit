import { ActionsCart } from "@components/actions_cart";
import { Input } from "@components/input";
import { TitleComponent } from "@components/title";
import { useDebounced } from "@hooks/debounce";
import { WrapperResumeProductsModule } from "@modules/wrapper_resume_products";
import { MockAcougue } from "@shared/mock/acougue";
import { MockBebidas } from "@shared/mock/bebidas";
import { MockCongelados } from "@shared/mock/congelados";
import { MockFrutas } from "@shared/mock/frutas";
import { listCategorieMock } from "@shared/mock/list_categories_names";
import { MockPadaria } from "@shared/mock/padaria";
import { MockVerdurasLegumes } from "@shared/mock/verduras_legumes";
import { type FC, useMemo, useState } from "react";
import { CiSearch } from "react-icons/ci";

import { PrincipalContainer } from "./styles";

export const PageInitial: FC = () => {
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounced(search, 300);

  const categorieFilter = useMemo(() => {
    const term = debouncedSearch.trim().toLowerCase();
    if (!term) return listCategorieMock;
    return listCategorieMock.filter((c) => c.toLowerCase().includes(term));
  }, [debouncedSearch]);

  return (
    <PrincipalContainer>
      <TitleComponent content={"Página inicial"} />

      <Input.Root>
        <Input.Wrapper>
          <Input.Element
            placeholder="Buscar categoria"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            name="search"
            type="text"
          />
          <Input.Icon icon={CiSearch} />
        </Input.Wrapper>
      </Input.Root>

      {categorieFilter?.includes(MockFrutas.categorieName) && (
        <WrapperResumeProductsModule
          values={MockFrutas.products}
          subtitle={MockFrutas.categorieName}
          categorieUuid={MockFrutas.categorieId}
        />
      )}

      {categorieFilter?.includes(MockCongelados.categorieName) && (
        <WrapperResumeProductsModule
          values={MockCongelados.products}
          subtitle={MockCongelados.categorieName}
          categorieUuid={MockCongelados.categorieId}
        />
      )}

      {categorieFilter?.includes(MockBebidas.categorieName) && (
        <WrapperResumeProductsModule
          values={MockBebidas.products}
          subtitle={MockBebidas.categorieName}
          categorieUuid={MockBebidas.categorieId}
        />
      )}

      {categorieFilter?.includes(MockPadaria.categorieName) && (
        <WrapperResumeProductsModule
          values={MockPadaria.products}
          subtitle={MockPadaria.categorieName}
          categorieUuid={MockPadaria.categorieId}
        />
      )}

      {categorieFilter?.includes(MockVerdurasLegumes.categorieName) && (
        <WrapperResumeProductsModule
          categorieUuid={MockVerdurasLegumes.categorieId}
          values={MockVerdurasLegumes.products}
          subtitle={MockVerdurasLegumes.categorieName}
        />
      )}

      {categorieFilter?.includes(MockAcougue.categorieName) && (
        <WrapperResumeProductsModule
          values={MockAcougue.products}
          subtitle={MockAcougue.categorieName}
          categorieUuid={MockAcougue.categorieId}
        />
      )}

      <ActionsCart />
    </PrincipalContainer>
  );
};
