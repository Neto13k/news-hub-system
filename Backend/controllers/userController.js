const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { findUserByEmail, createUser } = require('../models/User');

// Controller para registrar novo usuário
async function register(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Nome, email e senha são obrigatórios' });
  }
  
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    return res.status(400).json({ error: 'Email já registrado' });
  }

  // Cria a senha criptografada antes de salvar no banco
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await createUser(name, email, hashedPassword);

  // Retorna dados básicos do usuário criado
  return res.status(201).json({ id: user.id, name: user.name, email: user.email });
}


// Controller para autenticar usuário e gerar token JWT
async function login(req, res) {
  const { email, password } = req.body;

  const user = await findUserByEmail(email);
  if (!user) {
    return res.status(400).json({ error: 'Usuário não encontrado' });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res.status(401).json({ error: 'Senha incorreta' });
  }

  // Gera o token com o ID do usuário e validade de 1 hora
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
}


module.exports = { register, login };