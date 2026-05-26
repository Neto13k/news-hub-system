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
            <div className="error-message">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form__group">
              <input
                id="name"
                className="form__field"
                placeholder="Nome completo"
                {...register("name", { required: true })}
              />
              <label htmlFor="name" className="form__label">Nome completo</label>
            </div>
            <div className="form__group">
              <input
                id="email"
                className="form__field"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              <label htmlFor="email" className="form__label">Email</label>
            </div>
            <div className="form__group">
              <input
                id="password"
                className="form__field"
                placeholder="Senha"
                type="password"
                {...register("password", { required: true })}
              />
              <label htmlFor="password" className="form__label">Senha</label>
            </div>
            <button type="submit" className="btn btn-primary mt-1 btn-full">Cadastrar</button>
          </form>
          <p className="help-text">
            Já tem login? <Link to="/login" className="link">Faça login aqui.</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
