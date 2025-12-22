import bisnaguinha from "@assets/bisnaguinhas.png";
import manteiga from "@assets/manteiga.jpg";
import mortadela from "@assets/mortadela.png";
import pao from "@assets/pao.jpg";
import presunto from "@assets/presunto.jpg";
import queijo from "@assets/quejo.jpg";
import requeijao from "@assets/requeijao.jpg";
import type { IProductMock } from "src/@types/@mocks/products";
import { v4 as uuid } from "uuid";

export const MockPadaria: IProductMock = {
  categorieId: "58c4f2e2-1e8e-4a41-a03d-ae941ac6a6d3",
  categorieName: "Padaria",
  products: [
    { path: pao, name: "Pão panco", value: 5, id: uuid(), description: null },
    {
      path: bisnaguinha,
      name: "Bisnaguinha panco",
      value: 10,
      id: uuid(),
      description: null,
    },
    {
      path: manteiga,
      name: "Manteiga Qualy",
      value: 10,
      id: uuid(),
      description: null,
    },
    {
      path: requeijao,
      name: "Requeijão",
      value: 10,
      id: uuid(),
      description: null,
    },
    {
      path: mortadela,
      name: "Mortadela KG",
      value: 10,
      id: uuid(),
      description: null,
    },
    {
      path: queijo,
      name: "Queijo mussarela KG",
      value: 10,
      id: uuid(),
      description: null,
    },
    {
      path: presunto,
      name: "Presunto KG",
      value: 10,
      id: uuid(),
      description: null,
    },
  ],
};
