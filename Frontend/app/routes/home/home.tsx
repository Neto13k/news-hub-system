import type { Route } from "./+types/home";

// Importa o componente de home que contém toda a lógica da página
import Home from "../../components/home";

// Define os metadados da página (título e descrição exibidos no navegador)
export function meta({}: Route.MetaArgs) {
  return [
    { title: "News Hub" },
    { name: "description", content: "Welcome to News Hub!" },
  ];
}

// Rota principal — renderiza o componente Home
export default function HomePage() {
    return <Home />
}