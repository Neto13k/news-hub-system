import {useForm} from "react-hook-form";
import {useNavigate, Link} from "react-router";
import {UserRegister} from "../services/api"

// Componente de página de registro de usuário
export default function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit, } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  // Envia os dados do formulário para a API e salva o token retornado
  const onSubmit = async (data: any) => {
    try {
      const response = await UserRegister(data.name, data.email, data.password);
      if (response && response.token) {
        // Armazena o token JWT no localStorage para autenticação futura
        localStorage.setItem('token', response.token);
        // Redireciona para a página inicial após o cadastro
        navigate('/');
      }
    } catch (error) {
      console.error("Erro durante o registro:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("name", { required: true })}
        placeholder="Digite o nome completo"
      />

      <input
        {...register("email", { required: true })}
        placeholder="Digite seu email"
      />

      <input
        {...register("password", { required: true })}
        placeholder="Digite a senha"
        type="password"
      />
      <input type="submit" />

      <p>
        Já tem login? <Link to="/login">Faça login aqui.</Link>
      </p>

    </form>
  )
}
