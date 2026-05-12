const pool = require('../config/db');

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