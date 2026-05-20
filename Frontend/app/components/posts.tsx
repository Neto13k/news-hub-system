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
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title} <Link to={`/post/${post.id}`}>View Details</Link></li>
        ))}
      </ul>
    </div>
  );
}