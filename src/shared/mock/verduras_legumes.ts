import alface from "@assets/alface.jpg";
import alho from "@assets/alho.png";
import cenouras from "@assets/cenouras.png";
import pepino from "@assets/pepino.jpg";
import pimentaoVermelho from "@assets/pimentao.jpg";
import pimentaoVerde from "@assets/pimentao_verde.jpg";
import salsinha from "@assets/salsinha.png";
import tomate from "@assets/tomates.png";
import type { IProductMock } from "src/@types/@mocks/products";
import { v4 as uuid } from "uuid";

export const MockVerdurasLegumes: IProductMock = {
  categorieId: "01c9afff-6624-4f75-b524-edbc24a85e06",
  categorieName: "Verduras & Legumes",
  products: [
    { path: tomate, name: "Tomate", value: 5, id: uuid(), description: null },
    {
      path: pimentaoVerde,
      name: "Pimentão verde",
      value: 5,
      id: uuid(),
      description: null,
    },
    {
      path: pimentaoVermelho,
      name: "Pimentão vermelho",
      value: 5,
      id: uuid(),
      description: null,
    },
    {
      path: cenouras,
      name: "Cenouras",
      value: 5,
      id: uuid(),
      description: null,
    },
    { path: alface, name: "Alface", value: 5, id: uuid(), description: null },
    {
      path: salsinha,
      name: "Salsinha",
      value: 5,
      id: uuid(),
      description: null,
    },
    {
      path: alho,
      name: "Algo KG",
      value: 10,
      id: uuid(),
      description: null,
    },
    {
      path: pepino,
      name: "Pepino",
      value: 10,
      id: uuid(),
      description: "Sadia",
    },
    { path: tomate, name: "Tomate", value: 5, id: uuid(), description: null },
    {
      path: pimentaoVerde,
      name: "Pimentão verde",
      value: 5,
      id: uuid(),
      description: null,
    },
    {
      path: pimentaoVermelho,
      name: "Pimentão vermelho",
      value: 5,
      id: uuid(),
      description: null,
    },
    {
      path: cenouras,
      name: "Cenouras",
      value: 5,
      id: uuid(),
      description: null,
    },
    { path: alface, name: "Alface", value: 5, id: uuid(), description: null },
    {
      path: salsinha,
      name: "Salsinha",
      value: 5,
      id: uuid(),
      description: null,
    },
    {
      path: alho,
      name: "Algo KG",
      value: 10,
      id: uuid(),
      description: null,
    },
    {
      path: pepino,
      name: "Pepino",
      value: 10,
      id: uuid(),
      description: "Sadia",
    },
  ],
};
