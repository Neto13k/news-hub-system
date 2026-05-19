import {useForm} from "react-hook-form";
import {useNavigate, Link} from "react-router";
import {UserLogin} from "../services/api"


export default function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        try {
            const response = await UserLogin(data.email, data.password);
            if (response?.token) {
                localStorage.setItem('token', response.token);
                navigate('/');
            }
        } catch (error) {
            console.error('Falha ao fazer login:', error);
        }
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