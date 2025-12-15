import { useState, type FC } from "react";
import { TitleComponent } from "@components/title";
import { SectionInitial } from "./styles";
import { ButtonComponent } from "@components/button";
import { Input } from "@components/input";
import { CiLock } from "react-icons/ci";
import { patternColors } from "@shared/colors";
import { validatePassword } from "@shared/validators/password";
import { toast } from "react-toastify";

export const ResetPassword: FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validatePassword(password);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    if (password !== confirmPassword) {
      setErrors(["As senhas não coincidem"]);
      return;
    }

    setErrors([]);
    toast.success("Senha editada com sucesso!")
  };

  return (
    <SectionInitial>
      <div className="background"></div>

      <form onSubmit={handleSubmit}>
        <TitleComponent
          content={"Cadastre sua senha"}
          color={patternColors.orange}
        />

        <Input.Root>
          <Input.Label content="Senha:" />
          <Input.Wrapper>
            <Input.Element value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" />
            <Input.Icon icon={CiLock} />
          </Input.Wrapper>
        </Input.Root>

        <Input.Root>
          <Input.Label content="Confirmar senha:" />
          <Input.Wrapper>
            <Input.Element value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} name="confirmPassword" type="password" />
            <Input.Icon icon={CiLock} />
          </Input.Wrapper>
        </Input.Root>

        {errors.length > 0 && (
          <ul>
            {errors.map((error) => (
              <li key={error}>
                {error}
              </li>
            ))}
          </ul>
        )}

        <ButtonComponent content="CADASTRAR SENHA" />
      </form>
    </SectionInitial>
  );
};
