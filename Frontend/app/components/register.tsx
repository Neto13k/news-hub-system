import {useForm} from "react-hook-form";
import {useNavigate, Link} from "react-router";
import {UserRegister} from "../services/api"

export default function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit, } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  const onSubmit = async (data: any) => {
    try {
      const response = await UserRegister(data.name, data.email, data.password);
      if (response) {
        navigate('/login');
      }
    } catch (error) {
      console.error("Erro ao realizar tentativa de cadastro:", error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="card">
          <h1>Cadastre-se</h1>
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
