import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
   index("routes/home/home.tsx"), // Página inicial
   route("login", "routes/login/login.tsx"), // Página de login
   route("register", "routes/register/register.tsx"), // Página de registro
   route("posts", "routes/post/posts.tsx"), // Listagem de todos os posts
   route("createpost", "routes/post/createpost.tsx"), // Página para criar um novo post
   route("post/:id", "routes/post/post.tsx") // Detalhe de um post específico

] satisfies RouteConfig;
