import { useState, type FC } from "react";
import { TitleComponent } from "@components/title";
import { SectionInitial } from "./styles";
import { ButtonComponent } from "@components/button";
import { Input } from "@components/input";
import { TextComponent } from "@components/text";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { patternColors } from "@shared/colors";
import type React from "react";
import { toast } from "react-toastify";

export const SendEmailResetPassword: FC = () => {
  const [email, setEmail] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "") {
      toast.info("E-mail não informado")
      return;
    }

    toast.success("E-mail enviado com sucesso!")
  }

  return (
    <SectionInitial>
      <div className="background"></div>

      <form onSubmit={handleSubmit}>
        <TitleComponent
          content={"Informe seu e-mail"}
          color={patternColors.orange}
        />

        <TextComponent content={"Digite seu e-mail para que possamos enviar um link para criar uma nova senha."} size="12px" weight={400} />
        <Input.Root>
          <Input.Label content="E-mail: " />
          <Input.Wrapper>
            <Input.Element onChange={(e) => setEmail(e.target.value)} value={email} />
            <Input.Icon icon={CiMail} />
          </Input.Wrapper>
        </Input.Root>


        <ButtonComponent content="ENVIAR" />

        <Link to={"/"}>Voltar</Link>
      </form>
    </SectionInitial>
  );
};
