import carne from "@assets/carne.png";
import frango from "@assets/frango.png";
import peixe from "@assets/peixe.png";
import type { IProductMock } from "src/@types/@mocks/products";
import { v4 as uuid } from "uuid";

export const MockAcougue: IProductMock = {
  categorieId: "5a4059d3-b40a-45c3-900e-577ee86400e7",
  categorieName: "Acougue",
  products: [
    {
      path: carne,
      name: "Alcatra KG",
      value: 5,
      id: uuid(),
      description: null,
    },
    {
      path: peixe,
      name: "Peixe tilápia",
      value: 10,
      id: uuid(),
      description: null,
    },
    {
      path: frango,
      name: "Filé de frango 1KG",
      value: 10,
      id: uuid(),
      description: "Sadia",
    },
  ],
};
