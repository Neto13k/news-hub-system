const { findAllPosts, findPostById, createPost } = require('../models/Post');

// Retorna todos os posts cadastrados
async function getAll(req, res) {
  const posts = await findAllPosts();
  return res.json(posts);
}

// Retorna um post específico pelo ID
async function getById(req, res) {
  const post = await findPostById(req.params.id);
  if (!post)
    return res.status(404).json({ error: 'Post não encontrado' });
  return res.json(post);
}

// Cria um novo post para o usuário autenticado
async function create(req, res) {
  const { title, content } = req.body;

  if (!title || !content)
    return res.status(400).json({ error: 'Título e conteúdo são obrigatórios' });

  // req.user.id vem do authMiddleware e identifica o autor
  const post = await createPost(title, content, req.user.id);
  return res.status(201).json(post);
}

module.exports = { getAll, getById, create };