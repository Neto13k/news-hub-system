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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Title</label>
        <input {...register("title")} />
      </div>
      <div>
        <label>Content</label>
        <textarea {...register("content")} />
        <button type="submit">Create Post</button>
      </div>
    </form>
  );
}