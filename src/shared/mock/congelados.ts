import { v4 as uuid } from "uuid"
import type { IInterfaceMock } from "./interface"
import sorvete from '@assets/sorvete.png'
import paoQueijo from '@assets/pao_queijo.png'
import pizza from '@assets/pizza.png'
import waffle from '@assets/waffle.jpg'
import bacon from '@assets/bacon.png'

export const MockCongelados: IInterfaceMock[] = [
  { path: waffle, name: "Waffle", value: 5, id: uuid(), description: null },
  { path: pizza, name: "Pizza", value: 10, id: uuid(), description: null },
  { path: paoQueijo, name: "Pão de queijo", value: 10, id: uuid(), description: null },
  { path: sorvete, name: "Sorvete 2L", value: 10, id: uuid(), description: null },
  { path: bacon, name: "Bacon", value: 10, id: uuid(), description: null }
]