import Register from "../../components/register";

export function meta() {
  return [{ title: "Registrar | News Hub" }];
}

// Página de rota de registro que renderiza o componente de formulário de cadastro
export default function RegisterPage() {
    return <Register />
}