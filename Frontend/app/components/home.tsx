import { useNavigate } from "react-router";

export default function Home() {
  // Hook que permite navegar entre páginas programaticamente
  const navigate = useNavigate();

  return (
    <>
      <h1>Bem vindo ao News Hub</h1>

      {/* Botão para redirecionar o usuário para a página de login */}
      <h2>Já tem uma conta? Faça login</h2>
      <button onClick={() => navigate("/login")}>Login</button>

      {/* Botão para redirecionar o usuário para a página de registro */}
      <h2>Não tem uma conta? Cadastre-se</h2>
      <button onClick={() => navigate("/register")}>Registrar</button>
    </>
  );
}