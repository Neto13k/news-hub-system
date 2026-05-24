import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="home-container">
        <h1>Bem vindo ao News Hub</h1>
        <div className="home-actions">
          <div className="card action-card">
            <h2>Já tem uma conta?</h2>
            <p>Faça login para acessar todos os recursos</p>
            <button className="btn btn-primary" onClick={() => navigate("/login")}>Login</button>
          </div>
          <div className="card action-card">
            <h2>Não tem uma conta?</h2>
            <p>Cadastre-se gratuitamente e comece a criar posts</p>
            <button className="btn btn-secondary" onClick={() => navigate("/register")}>Registrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}