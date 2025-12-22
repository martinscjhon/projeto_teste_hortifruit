import aguaMineral from "@assets/agua.png";
import aguaCoco from "@assets/agua_coco.jpg";
import cocaCola from "@assets/cocacola.png";
import guanara from "@assets/guanara.jpg";
import sucoCaju from "@assets/suco_cujo.jpg";
import sucoNaturalLaranja from "@assets/suco_laranja.jpg";
import sucoNaturalManga from "@assets/suco_manga.png";
import sucoNaturalMaracuja from "@assets/suco_maracuja.jpg";
import { v4 as uuid } from "uuid";
import type { IProductMock } from "src/@types/@mocks/products";

export const MockBebidas: IProductMock = {
  categorieId: "9a2098af-eb26-4085-af4a-e0a2f35aa419",
  categorieName: "Bebidas",
  products: [
    {
      path: aguaMineral,
      name: "Água mineral",
      value: 5,
      id: uuid(),
      description: null,
    },
    {
      path: sucoNaturalLaranja,
      name: "Suco natural - Laranja",
      value: 10,
      id: uuid(),
      description: null,
    },
    {
      path: sucoNaturalManga,
      name: "Suco natural - Manga",
      value: 10,
      id: uuid(),
      description: null,
    },
    {
      path: sucoNaturalMaracuja,
      name: "Suco natural - Maracujá",
      value: 10,
      id: uuid(),
      description: null,
    },
    {
      path: sucoCaju,
      name: "Suco natural - Caju",
      value: 10,
      id: uuid(),
      description: null,
    },
    {
      path: cocaCola,
      name: "Coca-Cola 2L",
      value: 15,
      id: uuid(),
      description: null,
    },
    {
      path: guanara,
      name: "Guaraná Antartica 2L",
      value: 15,
      id: uuid(),
      description: null,
    },
    {
      path: aguaCoco,
      name: "Água de coco",
      value: 10,
      id: uuid(),
      description: null,
    },
  ]
}

