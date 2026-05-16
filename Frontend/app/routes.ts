import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
   index("routes/home.tsx"), // Página inicial
   route("login", "routes/login.tsx"), // Página de login
   route("register", "routes/register.tsx"), // Página de registro
   route("posts", "routes/posts.tsx"), // Listagem de todos os posts
   route("post/:id", "routes/post.tsx") // Detalhe de um post específico

] satisfies RouteConfig;
