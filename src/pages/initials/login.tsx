import type { FC } from "react";
import { TitleComponent } from "../../components/title";
import { SectionLogin } from "./styles";
import { ButtonComponent } from "../../components/button";
import { Input } from "../../components/input";
import { TextComponent } from "../../components/text";
import { Link } from "react-router-dom";
import { CiLock, CiMail } from "react-icons/ci";
import { patternColors } from "../../shared/colors";

export const Login: FC = () => {
  return (
    <SectionLogin>
      <div className="background"></div>

      <form>
        <TitleComponent
          content={"Faça seu login"}
          color={patternColors.orange}
        />

        <Input.Root>
          <Input.Label content="E-mail: " />
          <Input.Wrapper>
            <Input.Element />
            <Input.Icon icon={CiMail} />
          </Input.Wrapper>
        </Input.Root>

        <Input.Root>
          <Input.Label content="Senha: " />
          <Input.Wrapper>
            <Input.Element type="password" />
            <Input.Icon icon={CiLock} />
          </Input.Wrapper>
        </Input.Root>

        <ButtonComponent content="ACESSAR" />

        <Link to={"/"}>Esqueci minha senha</Link>
      </form>

      <TextComponent content={"Versão 1.0"} size="12px" weight={400} />
    </SectionLogin>
  );
};
