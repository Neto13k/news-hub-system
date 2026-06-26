import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        navigate("/posts");
      }
    }
  }, [navigate]);

  return (
    <div className="container">
      <div className="home-container">

        <div className="hero">
          <h1>Bem-vindo ao News Hub</h1>

          <h2>Fique por dentro de tudo em tempo real</h2>

          <p>
            Notícias instantâneas, debates da comunidade e conteúdos
            que importam para você — tudo em um só lugar.
          </p>
        </div>

        <div className="home-actions">
          <div className="card action-card">
            <h2>Já tem uma conta?</h2>

            <p>Faça login para acessar todos os recursos</p>

            <button
              className="btn btn-primary"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>

          <div className="card action-card">
            <h2>Não tem uma conta?</h2>

            <p>
              Cadastre-se gratuitamente e comece a criar posts
            </p>

            <button
              className="btn btn-secondary"
              onClick={() => navigate("/register")}
            >
              Registrar
            </button>
          </div>
        </div>

        <div className="features">

          <div className="card feature-card">
            <span className="feature-icon">📰</span>

            <h3>Notícias em tempo real</h3>

            <p>
              Receba atualizações instantâneas sobre os assuntos
              mais comentados.
            </p>
          </div>

          <div className="card feature-card">
            <span className="feature-icon">💬</span>

            <h3>Comunidade ativa</h3>

            <p>
              Publique posts, participe de discussões e compartilhe opiniões.
            </p>
          </div>

          <div className="card feature-card">
            <span className="feature-icon">📈</span>

            <h3>Tendências do momento</h3>

            <p>
              Descubra os tópicos mais populares e acompanhe
              o que está viralizando.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}