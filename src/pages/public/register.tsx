import { ButtonComponent } from "@components/button";
import { Input } from "@components/input";
import { TitleComponent } from "@components/title";
import { patternColors } from "@shared/colors";
import { validatePassword } from "@shared/validators/password";
import { type ChangeEvent, type FC, useState } from "react";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Section } from "./styles";

interface IRegister {
  name: string;
  tel: string;
  password: string;
  email: string;
}

export const Register: FC = () => {
  const [dados, setDados] = useState<IRegister>({
    email: "",
    name: "",
    password: "",
    tel: "",
  });
  const [errors, setErrors] = useState<string[]>([]);

  const change = (e: ChangeEvent<any>) => {
    const name = e.target.name;
    const value = e.target.value;

    setDados({
      ...dados,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      dados.name === "" ||
      dados.password === "" ||
      dados.email === "" ||
      dados.tel === ""
    ) {
      toast.info("Preencha todos os campos");
      return;
    }

    const validation = validatePassword(dados.password);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors([]);
    toast.success("Senha editada com sucesso!");
  };

  return (
    <Section>
      <div className="background"></div>

      <form onSubmit={handleSubmit}>
        <TitleComponent
          content={"Faça seu cadastro"}
          color={patternColors.orange}
        />

        <Input.Root>
          <Input.Label content="Nome:" />
          <Input.Wrapper>
            <Input.Element value={dados.name} onChange={change} name="name" />
            <Input.Icon icon={CiLock} />
          </Input.Wrapper>
        </Input.Root>

        <Input.Root>
          <Input.Label content="E-mail:" />
          <Input.Wrapper>
            <Input.Element
              value={dados.email}
              onChange={change}
              name="email"
              type="email"
            />
            <Input.Icon icon={CiLock} />
          </Input.Wrapper>
        </Input.Root>

        <Input.Root>
          <Input.Label content="Telefone:" />
          <Input.Wrapper>
            <Input.Element value={dados.tel} onChange={change} name="tel" />
            <Input.Icon icon={CiLock} />
          </Input.Wrapper>
        </Input.Root>

        <Input.Root>
          <Input.Label content="Senha:" />
          <Input.Wrapper>
            <Input.Element
              value={dados.password}
              onChange={change}
              name="password"
              type="password"
            />
            <Input.Icon icon={CiLock} />
          </Input.Wrapper>
        </Input.Root>

        {errors.length > 0 && (
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        <ButtonComponent content="CADASTRAR" />

        <Link to={"/"}>Voltar</Link>
      </form>
    </Section>
  );
};
