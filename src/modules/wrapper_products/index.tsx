import type { FC } from "react";
import { Wrapper } from "./styles";
import type { IInterfaceMock } from "@shared/mock/interface";
import { SubTitleComponent } from "@components/subtitle";
import { TextComponent } from "@components/text";
import { IntlCurrentFunction } from "@shared/functions/intl_current";
import { patternColors } from "@shared/colors";

interface IWrapperProducts {
  values: IInterfaceMock[]
  subtitle: string
}

export const WrapperProductsModule: FC<IWrapperProducts> = ({ values, subtitle }) => {
  return (
    <>
      <Wrapper>
        <SubTitleComponent content={subtitle} />
        <div className="wrapper_map">
          {values.map(v => {
            return (
              <div className="wrapper_container">
                <img src={v.path} alt={v.name} />
                <TextComponent content={v.name} key={v.id} size="10px" />
                {v.description && <TextComponent content={v.description} key={v.id} size="9px" className="description" />}
                <TextComponent content={IntlCurrentFunction(v.value)} key={v.id} size="10px" weight={600} color={patternColors.gray} />
              </div>
            )
          })}
        </div>
      </Wrapper>
    </>
  )
}