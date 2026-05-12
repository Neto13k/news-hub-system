const pool = require('../config/db');

// Busca um post pelo ID fornecido
async function findPostById(id) {
  const sql = 'SELECT * FROM posts WHERE id = $1 LIMIT 1';
  
  try {
    const result = await pool.query(sql, [id]);
    
    // Retorna o post encontrado ou undefined
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao buscar post por ID:', error);
    throw error;
  }
}

// Retorna todos os posts ordenados pela data de criação
async function findAllPosts() {
  const sql = 'SELECT * FROM posts ORDER BY created_at DESC';

  try {
    const result = await pool.query(sql);
    return result.rows;
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    throw error;
  }
}

// Cria um novo post com título, conteúdo e autor
async function createPost(title, content, author_id) {
  const sql = 'INSERT INTO posts (title, content, author_id) VALUES ($1, $2, $3) RETURNING *';

  try {
    const result = await pool.query(sql, [title, content, author_id]);
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao criar post:', error);
    throw error;
  }
}