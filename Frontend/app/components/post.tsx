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
      <div>
        <h1>{post.title}</h1>
        <h2>{post.content}</h2>
        <p>{post.created_at}</p>
      </div>
    );
  } else {
    return <div>Post not found</div>;
  }
}