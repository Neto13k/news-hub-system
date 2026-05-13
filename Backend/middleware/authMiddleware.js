const jwt = require('jsonwebtoken');

// Middleware para verificar o token JWT
const authMiddleware = (req, res, next) => {
  // Extrai o token do cabeçalho Authorization
  const authHeader  = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).send({ error: 'Token não fornecido' });
  }

  // Separa o "Bearer" do token real
  const token = authHeader.split(' ')[1]; // Extrai o token após "Bearer "

  try {
    // Verifica e decodifica o token usando a chave secreta
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Adiciona os dados do usuário decodificado ao objeto req
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).send({ error: 'Token inválido' });
  }
};

module.exports = authMiddleware;