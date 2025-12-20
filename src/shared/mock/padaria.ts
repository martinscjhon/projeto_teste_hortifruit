import { v4 as uuid } from "uuid"
import type { IInterfaceMock } from "./interface"
import pao from '@assets/pao.jpg'
import bisnaguinha from '@assets/bisnaguinhas.png'
import manteiga from '@assets/manteiga.jpg'
import requeijao from '@assets/requeijao.jpg'
import mortadela from '@assets/mortadela.png'
import queijo from '@assets/quejo.jpg'
import presunto from '@assets/presunto.jpg'

export const MockPadaria: IInterfaceMock[] = [
  { path: pao, name: "Pão panco", value: 5, id: uuid(), description: null },
  { path: bisnaguinha, name: "Bisnaguinha panco", value: 10, id: uuid(), description: null },
  { path: manteiga, name: "Manteiga Qualy", value: 10, id: uuid(), description: null },
  { path: requeijao, name: "Requeijão", value: 10, id: uuid(), description: null },
  { path: mortadela, name: "Mortadela KG", value: 10, id: uuid(), description: null },
  { path: queijo, name: "Queijo mussarela KG", value: 10, id: uuid(), description: null },
  { path: presunto, name: "Presunto KG", value: 10, id: uuid(), description: null },
]