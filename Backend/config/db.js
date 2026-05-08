// Configuração de exemplo de conexão com PostgreSQL.
// Os valores abaixo são apenas uma base e não correspondem a um banco ou senha reais.
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'news_hub',
    password: '123456',
    port: 5432,
});

module.exports = pool;