-- Tabela para usuários
CREATE TABLE users (
    id SERIAL PRIMARY KEY,  -- ID único
    name VARCHAR(100) NOT NULL,  -- Nome do usuário
    email VARCHAR(100) NOT NULL UNIQUE,  -- Email único
    password VARCHAR(255) NOT NULL  -- Senha criptografada
);

-- Tabela para posts/notícias
CREATE TABLE posts(
    id SERIAL PRIMARY KEY,  -- ID único do post
    title VARCHAR(100) NOT NULL UNIQUE,  -- Título único
    content TEXT NOT NULL,  -- Conteúdo do post
    author_id INTEGER NOT NULL,  -- ID do autor (referencia users)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Data de criação
    FOREIGN KEY (author_id) REFERENCES users(id)
);