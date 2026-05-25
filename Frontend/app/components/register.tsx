import {useForm} from "react-hook-form";
import {useNavigate, Link} from "react-router";
import {UserRegister} from "../services/api"
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit, } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: any) => {
    try {
      setError(null);
      const response = await UserRegister(data.name, data.email, data.password);
      if (response?.error) {
        setError(response.error);
      } else if (response) {
        navigate('/login');
      }
    } catch (error) {
      console.error("Erro ao realizar tentativa de cadastro:", error);
      setError('Ocorreu um erro ao tentar cadastrar');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="card">
          <h1>Cadastre-se</h1>
          {error && (
            <div style={{ 
              padding: '1rem', 
              marginBottom: '1rem', 
              backgroundColor: 'rgba(239, 68, 68, 0.2)', 
              border: '1px solid rgba(239, 68, 68, 0.5)', 
              borderRadius: '8px',
              color: '#fca5a5'
            }}>
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name">Nome completo:</label>
              <input
                id="name"
                {...register("name", { required: true })}
                placeholder="Digite o nome completo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                {...register("email", { required: true })}
                placeholder="Digite seu email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha:</label>
              <input
                id="password"
                {...register("password", { required: true })}
                placeholder="Digite a senha"
                type="password"
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Cadastrar</button>
          </form>
          <p className="help-text">
            Já tem login? <Link to="/login" className="link">Faça login aqui.</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
