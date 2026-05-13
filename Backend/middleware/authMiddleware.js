const jwt = require('jsonwebtoken');

// Middleware para verificar o token JWT
const authMiddleware = (req, res, next) => {
  // Extrai o token do cabeçalho Authorization
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).send({ error: 'Token não fornecido' });
  }

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