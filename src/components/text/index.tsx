import type { FC } from "react"

interface ITextComponent {
  content: string
  size?: string,
  weight?: number
}

export const TextComponent: FC<ITextComponent> = ({ content, size = "16px", weight = 400 }) => {
  return (
    <p style={{ fontSize: size, fontWeight: weight }}>{content}</p>
  )
}