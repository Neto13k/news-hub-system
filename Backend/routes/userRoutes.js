const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = 'SecretKeyForJWT';

/** Verifica se o usuário está autenticado usando o token JWT*/

const authmiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Acesso não autorizado' });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(401).json({ error: 'Token inválido' });
        }
        req.user = user;
        next();
    });
};

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    
    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Salvar usuário
    users.push({ email, password: hashedPassword });
    res.status(201).send('Usuário registrado com sucesso');
});

// LOGIN
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    // Encontrar usuário
    const user = users.find(u => u.email === email);
    if (!user) return res.status(400).send('Usuário não encontrado');
    
    // Verificar senha
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).send('Senha incorreta');
    
    // Gerar Token JWT
    const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});

module.exports = router;