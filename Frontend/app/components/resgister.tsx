import {useForm} from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      senha: "",
    },
  })

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <input
        {...register("email", { required: true })}
        placeholder="Digite o e-mail cadastrado"
      />

      <input
        {...register("senha", { required: true })}
        placeholder="Digite a senha"
        type="password"
      />

      <input type="submit" />
    </form>
  )
}