import type { ElementType, FC } from "react"

interface IInputIcon {
  icon: ElementType
}

export const InputIcon: FC<IInputIcon> = ({ icon: Icon }) => {
  return (
    <Icon />
  )
}