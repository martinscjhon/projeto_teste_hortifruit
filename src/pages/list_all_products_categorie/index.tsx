import { useEffect, useMemo, useState, type FC } from "react";
import { useParams } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

import { PrincipalContainer } from "./styles";
import { TitleComponent } from "@components/title";
import { WrapperAllProductsCategorieModule } from "@modules/wrapper_all_products_categorie";
import { ActionsCart } from "@components/actions_cart";
import { Input } from "@components/input";
import { LoadingComponent } from "@components/loading";

import { listAllCategoriesMock } from "@shared/mock/list_all_categories";
import { useDebounced } from "@hooks/debounce";

export const DetailsCategorie: FC = () => {
  const { categorieId } = useParams();
  const [category, setCategory] = useState<any>(null);

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounced(search, 300);

  useEffect(() => {
    const found = listAllCategoriesMock.find((p) => p.categorieId === categorieId);
    setCategory(found ?? null);
  }, [categorieId]);

  const productFilter = useMemo(() => {
    const term = debouncedSearch.trim().toLowerCase();
    const list = category?.products ?? [];

    if (!term) return list;

    return list.filter((p: any) => {
      const name = (p?.name).toString().toLowerCase();
      return name.includes(term);
    });
  }, [debouncedSearch, category]);

  if (!category) return <LoadingComponent />;

  return (
    <PrincipalContainer>
      <TitleComponent content={category?.categorieName} />

      <Input.Root>
        <Input.Wrapper>
          <Input.Element
            placeholder={`Buscar ${category?.categorieName?.toLowerCase()}`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            name="search"
            type="text"
          />
          <Input.Icon icon={CiSearch} />
        </Input.Wrapper>
      </Input.Root>

      <WrapperAllProductsCategorieModule
        values={productFilter}
        subtitle={category?.categorieName}
      />

      <ActionsCart />
    </PrincipalContainer>
  );
};
