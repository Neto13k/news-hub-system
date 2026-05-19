import type { Route } from "./+types/home";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Bem vindo ao News Hub</h1>
      <h2>Já tem uma conta? Faça login</h2>
      <button onClick={() => navigate("/login")}>Login</button>

      <h2>Não tem uma conta? Cadastre-se</h2>
      <button onClick={() => navigate("/register")}>Registrar</button>

    </>
  );
}