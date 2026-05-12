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