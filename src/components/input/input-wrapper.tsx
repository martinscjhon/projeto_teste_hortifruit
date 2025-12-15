import type { FC, ReactNode } from "react"
import { patternColors } from "../../shared/colors"

interface IInputWrapper {
  children: ReactNode
}

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: `1px solid ${patternColors.gray}`,
  borderRadius: "4px",
  paddingRight: "10px"
}

export const InputWrapper: FC<IInputWrapper> = ({ children }) => {
  return (
    <div style={style}>
      {children}
    </div>
  )
}