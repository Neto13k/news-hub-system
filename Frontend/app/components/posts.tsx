import { useState, useEffect } from "react";
import { Link } from "react-router";
import { getPosts } from "../services/api";

interface Post {
  id: number;
  title: string;
  content?: string;
}

export default function RenderPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await getPosts();
      if (result) {
        setPosts(result);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container">
      <div className="posts-container">
        <h1>Posts</h1>
        <div className="posts-list">
          {posts.map((post) => (
            <div key={post.id} className="card post-item">
              <span className="post-title">{post.title}</span>
              <Link to={`/post/${post.id}`} className="link post-link">Ver detalhes</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}