# News Hub System

Portal de notícias fullstack com autenticação JWT. Exibe notícias em tempo real via NewsAPI e permite que usuários cadastrados publiquem suas próprias notícias.

---

## Tecnologias

### Backend
- Node.js + Express 5
- PostgreSQL + pg (Pool)
- bcrypt — hash de senhas
- jsonwebtoken — autenticação JWT
- dotenv — variáveis de ambiente
- cors — controle de origens

### Frontend
- React 19 + React Router 7
- TypeScript
- SASS — estilização
- react-hook-form — gerenciamento de formulários
- Vite — bundler

---

## Estrutura do Projeto

```
news-hub-system/
├── Backend/
│   ├── config/
│   │   ├── db.js                 # Pool de conexão PostgreSQL
│   │   └── db.sql                # Script de criação das tabelas
│   ├── controllers/
│   │   ├── userController.js     # Register e Login
│   │   ├── postController.js     # Listar, buscar e criar posts
│   │   └── newsController.js     # Busca notícias da NewsAPI
│   ├── middleware/
│   │   └── authMiddleware.js     # Verificação do token JWT
│   ├── models/
│   │   ├── User.js               # Queries de usuário
│   │   └── Post.js               # Queries de post
│   ├── routes/
│   │   ├── userRoutes.js         # /users/register e /users/login
│   │   ├── postRoutes.js         # /posts
│   │   └── newsRoutes.js         # /news
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
└── Frontend/
    ├── app/
    │   ├── components/
    │   │   ├── home.tsx           # Landing page
    │   │   ├── login.tsx          # Formulário de login
    │   │   ├── register.tsx       # Formulário de cadastro
    │   │   ├── posts.tsx          # Listagem de posts
    │   │   ├── post.tsx           # Post individual
    │   │   ├── createPost.tsx     # Formulário de criação de post
    │   │   └── navbar.tsx         # Navegação global
    │   ├── routes/
    │   │   ├── home/
    │   │   ├── login/
    │   │   ├── register/
    │   │   └── post/
    │   ├── services/
    │   │   └── api.ts             # Funções fetch para o backend
    │   ├── styles/
    │   │   ├── _variables.scss
    │   │   ├── _reset.scss
    │   │   └── main.scss
    │   ├── root.tsx
    │   └── routes.ts
    └── package.json
```

---

## Pré-requisitos

- Node.js 18+
- PostgreSQL 14+
- Chave da [NewsAPI](https://newsapi.org/register) (gratuita)

---

## Instalação e Configuração

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/news-hub-system.git
cd news-hub-system
```

### 2. Configurar o Backend

```bash
cd Backend
npm install
```

Criar o arquivo `.env`:

```env
DB_USER=postgres
DB_HOST=localhost
DB_NAME=news_hub
DB_PASSWORD=sua_senha
DB_PORT=5432
PORT=3000
JWT_SECRET=sua_chave_secreta_longa_e_aleatoria
NEWS_API_KEY=sua_chave_da_newsapi
```

Para gerar um JWT_SECRET seguro:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Para obter a `NEWS_API_KEY`, cadastre-se gratuitamente em [newsapi.org/register](https://newsapi.org/register).

### 3. Criar o banco de dados

No pgAdmin ou psql:

```sql
CREATE DATABASE news_hub;
```

Conecte ao banco e execute o conteúdo de `Backend/config/db.sql`:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL UNIQUE,
    content TEXT NOT NULL,
    author_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id)
);
```

### 4. Configurar o Frontend

```bash
cd ../Frontend
npm install
```

---

## Rodando o projeto

### Backend

```bash
cd Backend
nodemon server.js
# Servidor rodando em http://localhost:3000
```

### Frontend

```bash
cd Frontend
npm run dev
# Aplicação rodando em http://localhost:5173
```

---

## Rotas da API

### Usuários

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| POST | `/users/register` | Cadastrar novo usuário | Não |
| POST | `/users/login` | Autenticar e receber token JWT | Não |

**Register:**
```json
POST /users/register
{
  "name": "José Hermes",
  "email": "jose@email.com",
  "password": "123456"
}
```

**Login:**
```json
POST /users/login
{
  "email": "jose@email.com",
  "password": "123456"
}
```
Resposta:
```json
{
  "token": "eyJhbGci...",
  "user": { "id": 1, "name": "José Hermes", "email": "jose@email.com" }
}
```

### Posts

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| GET | `/posts` | Listar todos os posts | Não |
| GET | `/posts/:id` | Buscar post por ID | Não |
| POST | `/posts` | Criar novo post | Sim |

**Criar post:**
```json
POST /posts
Authorization: Bearer eyJhbGci...

{
  "title": "Título da notícia",
  "content": "Conteúdo da notícia"
}
```

### Notícias

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| GET | `/news` | Busca top 10 notícias do Brasil via NewsAPI | Não |

---

## Páginas do Frontend

| URL | Página | Auth |
|-----|--------|------|
| `/` | Landing page | Não |
| `/login` | Login | Não |
| `/register` | Cadastro | Não |
| `/posts` | Listagem de posts e notícias | Não |
| `/post/:id` | Post individual | Não |
| `/createpost` | Criar post | Sim |

---

## Segurança

- Senhas armazenadas com hash bcrypt (salt rounds: 10)
- Autenticação via JWT com expiração de 1 hora
- Queries com parâmetros ($1, $2...) — protegido contra SQL Injection
- Token enviado via header `Authorization: Bearer <token>`
- Variáveis sensíveis em `.env` — nunca comitar no repositório
- Botão "Criar Post" oculto para usuários não autenticados

---

## Autor

José Hermes