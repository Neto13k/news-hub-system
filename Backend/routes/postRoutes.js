const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getAll, getById, create } = require('../controllers/postController');

// Rota para listar todos os posts
router.get('/', getAll);

// Rota para buscar um post específico pelo ID
router.get('/:id', getById);

// Rota para criar um novo post (requer autenticação)
router.post('/', auth, create);   // só criar exige token

module.exports = router;