import {useForm} from "react-hook-form";
import {useNavigate, Link} from "react-router";
import {UserRegister} from "../services/api"

// Componente da página de registro de usuário
export default function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit, } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  // Envia os dados para a API e redireciona para login após cadastro bem-sucedido
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
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Campo para o nome completo do usuário */}
      <input
        {...register("name", { required: true })}
        placeholder="Digite o nome completo"
      />

      {/* Campo para o email do usuário */}
      <input
        {...register("email", { required: true })}
        placeholder="Digite seu email"
      />

      {/* Campo para a senha do usuário */}
      <input
        {...register("password", { required: true })}
        placeholder="Digite a senha"
        type="password"
      />
      {/* Botão de envio do formulário de registro */}
      <input type="submit" />

      <p>
        {/* Link para a página de login, caso o usuário já tenha conta */}
        Já tem login? <Link to="/login">Faça login aqui.</Link>
      </p>

    </form>
  )
}
