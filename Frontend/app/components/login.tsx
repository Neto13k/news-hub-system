import {useForm} from "react-hook-form";
import {useNavigate, Link} from "react-router";
import {UserLogin} from "../services/api"
import { useState } from "react";

export default function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (data: any) => {
        try {
            setError(null);
            const response = await UserLogin(data.email, data.password);
            if (response?.token) {
                localStorage.setItem('token', response.token);
                localStorage.setItem('email', response.user.email)
                window.location.href = '/posts';
                navigate('/posts');
            } else if (response?.error) {
                setError(response.error);
            }
        } catch (error) {
            console.error('Falha ao fazer login:', error);
            setError('Ocorreu um erro ao tentar fazer login');
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <div className="card">
                    <h1>Login</h1>
                    {error && (
                        <div className="error-message">
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form__group">
                            <input type="email" id="email" className="form__field" placeholder="Email" {...register("email")} />
                            <label htmlFor="email" className="form__label">Email</label>
                        </div>
                        <div className="form__group">
                            <input type="password" id="password" className="form__field" placeholder="Senha" {...register("password")} />
                            <label htmlFor="password" className="form__label">Senha</label>
                        </div>
                        <button type="submit" className="btn btn-primary mt-1 btn-full">Login</button>
                    </form>
                    <p className="help-text">
                        Não tem login? <Link to="/register" className="link">Cadastre-se aqui.</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
