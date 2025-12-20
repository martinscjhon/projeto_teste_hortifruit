import banana from "@assets/banana.jpg";
import laranja from "@assets/laranja.png";
import limao from "@assets/limão.png";
import maca from "@assets/maça.png";
import melancia from "@assets/melancia.png";
import morango from "@assets/morango.png";
import pera from "@assets/pera.png";
import uva from "@assets/uva.png";
import { v4 as uuid } from "uuid";

import type { IInterfaceMock } from "./interface";

export const MockFrutas: IInterfaceMock[] = [
  {
    path: banana,
    name: "Banana prata kg",
    value: 5,
    id: uuid(),
    description: null,
  },
  { path: maca, name: "Maça", value: 10, id: uuid(), description: null },
  { path: laranja, name: "Laranja", value: 10, id: uuid(), description: null },
  { path: uva, name: "Uva verde", value: 10, id: uuid(), description: null },
  { path: pera, name: "Pera", value: 10, id: uuid(), description: null },
  { path: limao, name: "Limão", value: 15, id: uuid(), description: null },
  {
    path: melancia,
    name: "Melancia",
    value: 15,
    id: uuid(),
    description: null,
  },
  { path: morango, name: "Morango", value: 10, id: uuid(), description: null },
];
