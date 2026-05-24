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
                navigate('/posts');
            }
        } catch (error) {
            console.error('Falha ao fazer login:', error);
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <div className="card">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" {...register("email")} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Senha:</label>
                            <input type="password" id="password" {...register("password")} />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Login</button>
                    </form>
                    <p className="help-text">
                        Não tem login? <Link to="/register" className="link">Cadastre-se aqui.</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}