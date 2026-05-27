import Login from "../../components/login";

export function meta() {
  return [{ title: "Login | News Hub" }];
}

// Página de rota de login que renderiza o componente de formulário de login
export default function LoginPage() {
    return <Login />
}