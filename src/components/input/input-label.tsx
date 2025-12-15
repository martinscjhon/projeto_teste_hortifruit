import type { FC } from "react"

interface IInputLabel {
  content: string
}

const style = {
  fontSize: "13.5px"
}

export const InputLabel: FC<IInputLabel> = ({ content }) => {
  return (
    <label style={style}>{content}</label>
  )
}