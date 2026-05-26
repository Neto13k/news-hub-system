import {useForm} from "react-hook-form";
import { useNavigate } from "react-router";
import { createPost } from "../services/api";

interface FormData {
  title: string;
  content: string;
}

export default function CreateNewPost() {
  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  const onSubmit = async (data: FormData) => {
    if (token) {
      await createPost(data.title, data.content, token);
      navigate("/posts");
    } else {
      navigate("/login");
    }
  }

  return (
    <div className="container">
      <div className="form-container">
        <div className="card">
          <h1>Criar Post</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form__group">
              <input id="title" className="form__field" placeholder="Título" {...register("title")} />
              <label htmlFor="title" className="form__label">Título</label>
            </div>
            <div className="form-group mt-1">
              <label htmlFor="content">Conteúdo</label>
              <textarea id="content" {...register("content")} />
            </div>
            <button type="submit" className="btn btn-primary mt-1 btn-full">Criar Post</button>
          </form>
        </div>
      </div>
    </div>
  );
}
