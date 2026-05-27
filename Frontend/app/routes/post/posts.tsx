import RenderPosts from "../../components/posts";

export function meta() {
  return [{ title: "Posts | News Hub" }];
}

// Página de rota de posts que renderiza o componente de listagem de posts
export default function PostsPage() {
    return <RenderPosts />
}
