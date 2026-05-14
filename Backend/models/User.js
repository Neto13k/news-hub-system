const pool = require('../config/db');

// Cria um novo usuário com nome, email e senha criptografada
async function createUser(name, email, hashedPassword) {
  const sql = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email`; 
  
  try {
    const result = await pool.query(sql, [name, email, hashedPassword]);
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error;
  }
}

// Busca um usuário pelo email fornecido
async function findUserByEmail(email) {
  // $1 evita SQL Injection
  const sql = 'SELECT * FROM users WHERE email = $1 LIMIT 1';
  
  try {
    const result = await pool.query(sql, [email]);
    
    // Retorna o objeto do usuário ou undefined se não achar nada
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    throw error;
  }
}

module.exports = { createUser, findUserByEmail };
