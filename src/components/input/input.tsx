import type { FC, InputHTMLAttributes } from "react"

interface IInput extends InputHTMLAttributes<HTMLInputElement> { }

const style = {
  height: "2.5rem",
  borderRadius: "4px",
  paddingLeft: "10px",
  width: "100%"
}

export const InputComponent: FC<IInput> = ({ ...rest }) => {
  return (
    <input {...rest} style={style}/>
  )
}