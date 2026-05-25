/**
Configura e inicia o servidor Express com rotas e middlewares.
*/
require ('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const newsRoutes = require('./routes/newsRoutes');

app.use(express.json())
app.use(cors())
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/news', newsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});