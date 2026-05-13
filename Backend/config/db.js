// Configuração de exemplo de conexão com PostgreSQL.
// Os valores abaixo são apenas uma base e não correspondem a um banco ou senha reais.
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

module.exports = pool;