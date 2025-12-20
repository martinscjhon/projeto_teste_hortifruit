import { v4 as uuid } from "uuid"
import type { IInterfaceMock } from "./interface"
import carne from '@assets/carne.png'
import peixe from '@assets/peixe.png'
import frango from '@assets/frango.png'

export const MockVerdurasLegumes: IInterfaceMock[] = [
  { path: carne, name: "Alcatra KG", value: 5, id: uuid(), description: null},
  { path: peixe, name: "Peixe tilápia", value: 10, id: uuid(), description: null },
  { path: frango, name: "Filé de frango 1KG", value: 10, id: uuid(), description: "Sadia" },
]