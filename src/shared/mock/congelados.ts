import bacon from "@assets/bacon.png";
import paoQueijo from "@assets/pao_queijo.png";
import pizza from "@assets/pizza.png";
import sorvete from "@assets/sorvete.png";
import waffle from "@assets/waffle.jpg";
import { v4 as uuid } from "uuid";

import type { IProductMock } from "src/@types/@mocks/products";

export const MockCongelados: IProductMock = {
  categorieId: "5127097e-f064-4ea8-9f4c-2dabedb48c05",
  categorieName: "Congelados",
  products: [
    { path: waffle, name: "Waffle", value: 5, id: uuid(), description: null },
    { path: pizza, name: "Pizza", value: 10, id: uuid(), description: null },
    {
      path: paoQueijo,
      name: "Pão de queijo",
      value: 10,
      id: uuid(),
      description: null,
    },
    {
      path: sorvete,
      name: "Sorvete 2L",
      value: 10,
      id: uuid(),
      description: null,
    },
    { path: bacon, name: "Bacon", value: 10, id: uuid(), description: null },
  ]
}