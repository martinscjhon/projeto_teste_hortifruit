import { ButtonComponent } from "@components/button";
import { Input } from "@components/input";
import { TitleComponent } from "@components/title";
import { patternColors } from "@shared/colors";
import { type FC, useState } from "react";
import { CiLock, CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { SectionInitial } from "./styles";

export const Login: FC = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "") {
      toast.info("E-mail não informado");
      return;
    }

    if (password == "") {
      toast.info("Senha não informada");
      return;
    }

    toast.success("E-mail enviado com sucesso!");
  };

  return (
    <SectionInitial>
      <div className="background"></div>

      <form onSubmit={handleSubmit}>
        <TitleComponent
          content={"Faça seu login"}
          color={patternColors.orange}
        />

        <Input.Root>
          <Input.Label content="E-mail: " />
          <Input.Wrapper>
            <Input.Element
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
            />
            <Input.Icon icon={CiMail} />
          </Input.Wrapper>
        </Input.Root>

        <Input.Root>
          <Input.Label content="Senha: " />
          <Input.Wrapper>
            <Input.Element
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
            <Input.Icon icon={CiLock} />
          </Input.Wrapper>
        </Input.Root>

        <ButtonComponent content="ACESSAR" />

        <Link to={"/esquecisenha"}>Esqueci minha senha</Link>
      </form>
    </SectionInitial>
  );
};
