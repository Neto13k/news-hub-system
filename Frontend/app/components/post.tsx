import { useState, useEffect } from "react";
import {useParams} from "react-router";
import { getPostById } from "../services/api";

interface Post {
  id: number;
  title: string;
  content?: string;
  created_at: string;
}

export default function PostContent() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null); 
  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPostById(id);
      setPost(data);
    }
    fetchPost();
  }, [id]);

  if (post) {
        return (
      <div className="container">
        <div className="post-detail">
          <div className="card">
            <h1>{post.title}</h1>
            <div className="post-content">{post.content}</div>
            <p className="post-date">Criado em: {new Date(post.created_at).toLocaleDateString('pt-BR')}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="card">
          <h1>Post não encontrado</h1>
        </div>
      </div>
    );
  }
}