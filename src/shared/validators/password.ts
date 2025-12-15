export type IPasswordValidation = {
  isValid: boolean;
  errors: string[];
};

export function validatePassword(password: string): IPasswordValidation {
  const errors: string[] = [];

  if (password.length < 8) errors.push("- Mínimo 8 caracteres;");


  if (!/[a-z]/.test(password) || !/[A-Z]/.test(password))
    errors.push("- Conter letras maiúsculas e minúsculas;");


  if (!/\d/.test(password))
    errors.push("- Conter pelo menos 1 número;");


  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
    errors.push("- Incluir ao menos um caractere especial;");


  return {
    isValid: errors.length === 0,
    errors,
  };
}
