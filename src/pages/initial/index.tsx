import { TitleComponent } from "@components/title";
import { WrapperProductsModule } from "@modules/wrapper_products";
import { MockBebidas } from "@shared/mock/bebidas";
import type { FC } from "react";
import { PrincipalContainer } from "./styles";
import { MockFrutas } from "@shared/mock/frutas";
import { MockCongelados } from "@shared/mock/congelados";
import { MockAcougue } from "@shared/mock/acougue";
import { MockPadaria } from "@shared/mock/padaria";
import { MockVerdurasLegumes } from "@shared/mock/verduras_legumes";

export const PageInitial: FC = () => {
  return (
    <PrincipalContainer>
      <TitleComponent content={"Página inicial"} />
      <WrapperProductsModule values={MockFrutas} subtitle="Frutas" />
      <WrapperProductsModule values={MockCongelados} subtitle="Congelados" />
      <WrapperProductsModule values={MockBebidas} subtitle="Bebidas" />
      <WrapperProductsModule values={MockPadaria} subtitle="Padaria" />
      <WrapperProductsModule values={MockVerdurasLegumes} subtitle="Legumes & Verduras" />
       <WrapperProductsModule values={MockAcougue} subtitle="Açougue" />
    </PrincipalContainer>
  )
}