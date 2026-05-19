import {useForm} from "react-hook-form";
import {useNavigate} from "react-router";


export default function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        navigate("/login");
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" {...register("email")} />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" {...register("password")} />
                <button type="submit">Login</button>
            </form>
            <p>
                Não tem login? <Link to="/register">Cadastre-se aqui.</Link>
            </p>
        </>
    );
}